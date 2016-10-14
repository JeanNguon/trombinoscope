import { Injectable } from '@angular/core';
import { Person } from './../model/person/person';
import { PERSONS } from './../mock/mock-person';

@Injectable() //emits metadata
export class PersonService {
	getPersons(): Person[]{
		return PERSONS;
	} 
}
