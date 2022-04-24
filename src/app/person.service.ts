import { Injectable } from '@angular/core';
import { Person } from 'src/person';
import { PEOPLE } from './mock-people';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}
  private peopleUrl = 'api/people';

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.peopleUrl);
  }
}
