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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var PersonService = (function () {
    function PersonService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.personsUrl = './../../in_memory/persons'; //URL to web API
    }
    PersonService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // TODO: change error console to
        return Promise.reject(error.message || error);
    };
    ;
    PersonService.prototype.getPersons = function () {
        //convert Observable to Promise
        return this.http.get(this.personsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ;
    PersonService.prototype.getPerson = function (id) {
        return this.getPersons()
            .then(function (persons) { return persons.find(function (person) { return person.id === id; }); });
    };
    ;
    PersonService.prototype.update = function (person) {
        var url = this.personsUrl + "/" + person.id;
        return this.http
            .put(url, JSON.stringify(person), { headers: this.headers })
            .toPromise()
            .then(function () { return person; })
            .catch(this.handleError);
    };
    PersonService.prototype.create = function (firstname) {
        return this.http
            .post(this.personsUrl, JSON.stringify({ firstname: firstname }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    PersonService.prototype.delete = function (id) {
        var url = this.personsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    PersonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PersonService);
    return PersonService;
}());
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map