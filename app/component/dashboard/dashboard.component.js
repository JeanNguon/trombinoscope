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
var DashboardComponent = (function () {
    //inject person service into the constructor and hold it in private personService Field
    function DashboardComponent(personService, router) {
        this.personService = personService;
        this.router = router;
        //Define array of persons
        this.persons = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        //call personService to get list onInit
        this.personService.getPersons()
            .then(function (persons) { return _this.persons = persons.slice(0, 3); });
    };
    DashboardComponent.prototype.gotoDetail = function (person) {
        //set link parameters array
        var link = ['persons/detail', person.id];
        //pass the array to the router's navigation metod
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: './view/dashboard.component.html',
            styleUrls: ['./css/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map