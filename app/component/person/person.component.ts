import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Person} from './../../model/person/person';
import { PersonService } from './../../service/person.service';


@Component({
    moduleId: module.id,
  	selector: 'my-persons',
  	template: `
	    <h2>Place des développeurs</h2>
	    <ul class="persons list-group">
	      <li *ngFor="let person of persons"
	        [class.selected]="person === selectedPerson"
	        (click)="onSelect(person)">
          <div class="list-group-item">
	          <article>
              <span class="badge">{{person.id}}</span> {{person.firstname}} {{person.lastname}}
              <div> {{person.skills}}</div>
            </article>
            <aside>
              <img src="{{person.img.src}}" alt="{{person.img.alt}}" height="42" width="42"/>
            </aside>
            <br />
          </div>
	      </li>
	    </ul>
      <div *ngIf="selectedPerson">
        <h2>
          {{selectedPerson.firstname | uppercase}} is my hero
        </h2>
        <button (click)="gotoDetail()">View Details</button>
      </div>
	  `,
	
  	//provider make Angular creating new instance of PersonService during AppComponent creation
	providers: [PersonService]
})

export class PersonComponent implements OnInit {

	title = 'Tour of Developpers';
	persons: Person[];
	selectedPerson: Person;

	constructor(
			private personService: PersonService,
      private router : Router
		){};

	onSelect(person: Person): void {
  	  this.selectedPerson = person;
  }

  getPersons(): void{
  	//receive Promise data from PersonService
   	this.personService.getPersons().then(persons => this.persons = persons);
  }

  //LifeCycle Hook that get list of Persons when AppComponent activates
  ngOnInit():void {
  	this.getPersons();
	}

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPerson.id]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/