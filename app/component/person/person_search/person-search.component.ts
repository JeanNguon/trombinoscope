import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import {Person} from './../../../model/person/person';
import { PersonSearchService } from './../../../service/person-search.service';

@Component({
  moduleId: module.id,
  selector: 'person-search',
  templateUrl: '/view/person-search.component.html',
  styleUrls: [ '/css/person-search.component.css' ],
  providers: [PersonSearchService]
})
export class PersonSearchComponent implements OnInit {
  
  private searchTerms = new Subject<string>();//Subject is a producer of an observable stream
  
  constructor(
    private personSearchService: PersonSearchService,
    private router: Router) {}

  // Push a search term (new string) into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term); //Observable of string
  }
  
  persons: Observable<Person[]>;

  ngOnInit(): void {
    this.persons = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.personSearchService.search(term)
        // or the observable of empty persons if no search term
        : Observable.of<Person[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Person[]>([]);
      });
  }
  
  gotoDetail(person: Person): void {
    let link = ['/detail', person.id];
    this.router.navigate(link);
  }
}
