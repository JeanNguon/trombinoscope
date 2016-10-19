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
var ImageService = (function () {
    function ImageService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.imagesUrl = './../../in_memory/images'; //URL to web API	
    }
    ImageService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // TODO: change error console to
        return Promise.reject(error.message || error);
    };
    ;
    ImageService.prototype.getImages = function () {
        //convert Observable to Promise
        return this.http.get(this.imagesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ;
    ImageService.prototype.getImage = function (id) {
        return this.getImages()
            .then(function (images) { return images.find(function (image) { return image.id === id; }); });
    };
    ;
    ImageService.prototype.update = function (image) {
        var url = this.imagesUrl + "/" + image.id;
        return this.http
            .put(url, JSON.stringify(image), { headers: this.headers })
            .toPromise()
            .then(function () { return image; })
            .catch(this.handleError);
    };
    ImageService.prototype.create = function (firstname) {
        return this.http
            .post(this.imagesUrl, JSON.stringify({ firstname: firstname }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ImageService.prototype.delete = function (id) {
        var url = this.imagesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ImageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ImageService);
    return ImageService;
}());
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map