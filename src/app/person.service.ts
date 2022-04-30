import { Injectable } from '@angular/core';
import { Person } from 'src/person';
import { PEOPLE } from './mock-people';
import { Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}
  private peopleUrl = 'api/people';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.peopleUrl);
  }

  createPerson(person: Person): Observable<Person> {
    person.id = null;
    return this.http.post<Person>(this.peopleUrl, person, this.httpOptions);
  }

  getPerson(id: number): Observable<Person> {
    if (id === 0) {
      return of(this.initializePerson());
    }
    const url = `${this.peopleUrl}/${id}`;
    return this.http
      .get<Person>(url)
      .pipe(
        tap((data) => console.log('getPersonService: ' + JSON.stringify(data)))
      );
  }

  updatePerson(person: Person): Observable<Person> {
    return this.http.put<Person>(this.peopleUrl, person, this.httpOptions);
  }

  private initializePerson(): Person {
    return {
      id: 0,
      firstName: '',
      lastName: '',
    };
  }
}
