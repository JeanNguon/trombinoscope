import { Component } from '@angular/core';
import {Person} from './model/person/person';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Place des développeurs</h2>
    <ul class="persons">
      <li *ngFor="let person of persons"
        [class.selected]="person === selectedPerson"
        (click)="onSelect(person)">
        <span class="badge">{{person.id}}</span> {{person.firstname}} {{person.lastname}}
      </li>
    </ul>
    <my-person-detail [person]="selectedPerson"></my-person-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .persons {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .persons li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .persons li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .persons li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .persons .text {
      position: relative;
      top: -3px;
    }
    .persons .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Tour of Developpers';
  persons: Person[];
  selectedPerson: Person;

  onSelect(person: Person): void {
    this.selectedPerson = person;
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/