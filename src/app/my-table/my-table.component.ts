import { Component, OnInit } from '@angular/core';
import { Person } from 'src/person';
import { PEOPLE } from '../mock-people';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css'],
})
export class MyTableComponent implements OnInit {
  people: Person[] = [];
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void {
    this.personService
      .getPeople()
      .subscribe((people) => (this.people = people));
  }
}
