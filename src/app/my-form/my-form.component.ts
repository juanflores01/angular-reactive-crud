import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Person } from 'src/person';
import { PersonService } from '../person.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent implements OnInit {
  personForm: FormGroup | any;
  person!: Person;
  pageTitle = 'My Form';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.personForm = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });

    this.getPerson();
  }

  getPerson(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.personService
      .getPerson(id)
      .subscribe({ next: (person: Person) => this.displayPerson(person) });
  }

  displayPerson(person: Person): void {
    if (this.personForm) {
      this.personForm.reset();
    }

    this.person = person;

    if (this.person.id === 0) {
      this.pageTitle = 'Add Person';
    } else {
      this.pageTitle = `Edit Person: ${this.person.firstName}`;
    }
    this.personForm.patchValue({
      firstName: this.person.firstName,
      lastName: this.person.lastName,
    });
  }

  savePerson(): void {
    const p = { ...this.person, ...this.personForm.value };
    if (p.id === 0) {
      this.personService.createPerson(p).subscribe();
      console.log('savePerson > createPerson');
      this.router.navigate(['/my-table']);
    } else {
      this.personService.updatePerson(p).subscribe();
      console.log('savePerson > updatePerson');
      this.router.navigate(['/my-table']);
    }
  }
}
