import { Component, Input, OnInit } from '@angular/core';
import {Person} from './../../../model/person/person';
import { PersonService } from './../../../service/person.service';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector: 'my-person-detail',
 templateUrl: './person-detail.component.html',

})
export class PersonDetailComponent implements OnInit {
	@Input()
	person: Person;
  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private location: Location
  ) {};

  ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
    let id = +params['id'];
    this.personService.getPerson(id)
      .then(person => this.person = person);
    });
  }
  goBack(): void {
    this.location.back();
  }

}
