import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Person} from './../../model/person/person';
import { PersonService } from './../../service/person.service';


@Component({
    moduleId: module.id,
  	selector: 'my-persons',
  	templateUrl:  './../../../view/person.component.html',
    styleUrls: ['./../../../css/person.component.css'],	
  	//provider make Angular creating new instance of PersonService during AppComponent creation
	  providers: [PersonService]
})

export class PersonComponent implements OnInit {

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
    this.router.navigate(['/persons/detail', this.selectedPerson.id]);
  }

  add(firstname: string): void {
    firstname = firstname.trim();
    if (!firstname) { return; }
    this.personService.create(firstname)
      .then(person => {
        this.persons.push(person);
        this.selectedPerson = null;
    });
  }

  delete(person: Person): void {
  this.personService
      .delete(person.id)
      .then(() => {
        this.persons = this.persons.filter(h => h !== person);
        if (this.selectedPerson === person) { this.selectedPerson = null; }
   });
}



}

