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
var common_1 = require('@angular/common');
var person_service_1 = require('./../../../service/person.service');
var PersonDetailComponent = (function () {
    function PersonDetailComponent(personService, route, location) {
        this.personService = personService;
        this.route = route;
        this.location = location;
    }
    ;
    PersonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.personService.getPerson(id)
                .then(function (person) { return _this.person = person; });
        });
    };
    PersonDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PersonDetailComponent.prototype.save = function () {
        var _this = this;
        this.personService.update(this.person)
            .then(function () { return _this.goBack(); });
    };
    PersonDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-person-detail',
            templateUrl: '/view/person-detail.component.html',
            styleUrls: ['/css/person-detail.component.css']
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService, router_1.ActivatedRoute, common_1.Location])
    ], PersonDetailComponent);
    return PersonDetailComponent;
}());
exports.PersonDetailComponent = PersonDetailComponent;
//# sourceMappingURL=person-detail.component.js.map