"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PERSONS = [
    { id: 11, firstname: 'Jean', lastname: 'Nguon' },
    { id: 12, firstname: 'Mael', lastname: 'Gadbois' },
    { id: 13, firstname: 'Hugo', lastname: 'Colas' },
    { id: 14, firstname: 'Florian', lastname: 'Fagniez' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Developpers';
        this.persons = PERSONS;
    }
    AppComponent.prototype.onSelect = function (person) {
        this.selectedPerson = person;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>Place des d\u00E9veloppeurs</h2>\n    <ul class=\"persons\">\n      <li *ngFor=\"let person of persons\"\n        [class.selected]=\"person === selectedPerson\"\n        (click)=\"onSelect(person)\">\n        <span class=\"badge\">{{person.id}}</span> {{person.firstname}} {{person.lastname}}\n      </li>\n    </ul>\n    <my-person-detail [person]=\"selectedPerson\"></my-person-detail>\n  ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .persons {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .persons li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .persons li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .persons li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .persons .text {\n      position: relative;\n      top: -3px;\n    }\n    .persons .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.component.js.map