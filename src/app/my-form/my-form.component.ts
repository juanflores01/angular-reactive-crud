import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.personForm = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }

  addPerson(): void {
    const p = { ...this.person, ...this.personForm.value };
    this.personService.createPerson(p).subscribe();
    this.router.navigate(['/my-table']);
  }
}
