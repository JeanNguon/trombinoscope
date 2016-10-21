import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Person } from './../model/person/person';

@Injectable() //emits metadata
export class PersonService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private personsUrl = './../../in_memory/persons'; //URL to web API
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // TODO: change error console to
		return Promise.reject(error.message || error);
	}

	constructor(private http: Http){};

	getPersons(): Promise<Person[]>{
			//convert Observable to Promise
			return this.http.get(this.personsUrl)
 			.toPromise()
 			//pass the promise back
            .then(response => response.json().data as Person[])
            .catch(this.handleError);
	};


	getPersonsLocalStorage(): Person[]{
			return JSON.parse( localStorage.getItem('persons'));
	};

	getPerson(id: number): Promise<Person> {
 		return this.getPersons()
            .then(persons => persons.find(person => person.id === id));
	};

	update(person: Person): Promise<Person> {
	  const url = `${this.personsUrl}/${person.id}`;
	  return this.http
	    .put(url, JSON.stringify(person), {headers: this.headers})
	    .toPromise()
	    .then(() => person)
	    .catch(this.handleError);
	}

	create(firstname: string): Promise<Person> {
	  return this.http
	    .post(this.personsUrl, JSON.stringify({firstname: firstname}), {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data)
	    .catch(this.handleError);
	}

	createLocalStorage(firstname: string, lastname: string): void {
		var listFirstname = localStorage.getItem('firstnames');
		if(!this.isStringContainsString(firstname, listFirstname)){
			if(firstname !== null){
				listFirstname +=listFirstname+";"+firstname+";";
			}
			localStorage.setItem('firstnames', listFirstname);
		}
	}

	/**
	* return position of string
	*/
	isStringContainsString(chaine: string, string: string): number{
		return chaine.indexOf(string);
	}

	delete(id: number): Promise<void> {
	  const url = `${this.personsUrl}/${id}`;
	  return this.http.delete(url, {headers: this.headers})
	    .toPromise()
	    .then(() => null)
	    .catch(this.handleError);
	}	
}
