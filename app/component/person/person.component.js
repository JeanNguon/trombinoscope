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
var router_1 = require('@angular/router');
var person_service_1 = require('./../../service/person.service');
var PersonComponent = (function () {
    function PersonComponent(personService, router) {
        this.personService = personService;
        this.router = router;
        this.title = 'Tour of Developpers';
    }
    ;
    PersonComponent.prototype.onSelect = function (person) {
        this.selectedPerson = person;
    };
    PersonComponent.prototype.getPersons = function () {
        var _this = this;
        //receive Promise data from PersonService
        this.personService.getPersons().then(function (persons) { return _this.persons = persons; });
    };
    //LifeCycle Hook that get list of Persons when AppComponent activates
    PersonComponent.prototype.ngOnInit = function () {
        this.getPersons();
    };
    PersonComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedPerson.id]);
    };
    PersonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-persons',
            templateUrl: './../../../person.component.html',
            //provider make Angular creating new instance of PersonService during AppComponent creation
            providers: [person_service_1.PersonService]
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService, router_1.Router])
    ], PersonComponent);
    return PersonComponent;
}());
exports.PersonComponent = PersonComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=person.component.js.map