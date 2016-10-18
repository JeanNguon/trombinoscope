import { Component, OnInit } from '@angular/core';
import {Person} from './../../model/person/person';
import { PersonService } from './../../service/person.service';
import { Router } from '@angular/router';


@Component({
  selector: 'my-dashboard',
  templateUrl: './view/dashboard.component.html',
  styleUrls: [ './css/dashboard.component.css' ]

})
export class DashboardComponent implements OnInit {
//Define array of persons
  persons: Person[] = [];
//inject person service into the constructor and hold it in private personService Field
  constructor(
  	private personService: PersonService,
  	private router: Router
  	) { }

  ngOnInit(): void {

//call personService to get list onInit
    this.personService.getPersons()
      .then(persons => this.persons = persons.slice(0, 3));
      console.log(this.persons);
  }

	gotoDetail(person: Person): void { 
		//set link parameters array
  		let link = ['/detail', person.id];
  		//pass the array to the router's navigation metod
  		this.router.navigate(link);
	}
}
