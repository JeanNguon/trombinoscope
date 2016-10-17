import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Person} from './../../model/person/person';
import { PersonService } from './../../service/person.service';


@Component({
    moduleId: module.id,
  	selector: 'my-persons',
  	templateUrl:  './../../../view/person.component.html',

	
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