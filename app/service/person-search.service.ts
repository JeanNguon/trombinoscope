import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Person } from './../model/person/person';


@Injectable()
export class PersonSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Person[]> {
    return this.http
    			//URL as a query string (term)
               .get(`app/persons/?firstname=${term}`)
               .map((r: Response) => r.json().data as Person[]);
  }
}
