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
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var person_search_service_1 = require('./../../../service/person-search.service');
var PersonSearchComponent = (function () {
    function PersonSearchComponent(personSearchService, router) {
        this.personSearchService = personSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject(); //Subject is a producer of an observable stream
    }
    // Push a search term (new string) into the observable stream.
    PersonSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term); //Observable of string
    };
    PersonSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.persons = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.personSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    PersonSearchComponent.prototype.gotoDetail = function (person) {
        var link = ['/detail', person.id];
        this.router.navigate(link);
    };
    PersonSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'person-search',
            templateUrl: '/view/person-search.component.html',
            styleUrls: ['/css/person-search.component.css'],
            providers: [person_search_service_1.PersonSearchService]
        }), 
        __metadata('design:paramtypes', [person_search_service_1.PersonSearchService, router_1.Router])
    ], PersonSearchComponent);
    return PersonSearchComponent;
}());
exports.PersonSearchComponent = PersonSearchComponent;
//# sourceMappingURL=person-search.component.js.map