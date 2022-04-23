import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Person } from 'src/person';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent implements OnInit {
  personForm: FormGroup | any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.personForm = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }
}
