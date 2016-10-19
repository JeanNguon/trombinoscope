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
var image_service_1 = require('./../../service/image.service');
var ImageComponent = (function () {
    function ImageComponent(imageService, router) {
        this.imageService = imageService;
        this.router = router;
    }
    ;
    ImageComponent.prototype.onSelect = function (image) {
        this.selectedImage = image;
    };
    ImageComponent.prototype.getImages = function () {
        var _this = this;
        //receive Promise data from ImageService
        this.imageService.getImages().then(function (images) { return _this.images = images; });
    };
    //LifeCycle Hook that get list of Images when AppComponent activates
    ImageComponent.prototype.ngOnInit = function () {
        this.getImages();
    };
    ImageComponent.prototype.add = function (firstname) {
        var _this = this;
        firstname = firstname.trim();
        if (!firstname) {
            return;
        }
        this.imageService.create(firstname)
            .then(function (image) {
            _this.images.push(image);
            _this.selectedImage = null;
        });
    };
    ImageComponent.prototype.delete = function (image) {
        var _this = this;
        this.imageService
            .delete(image.id)
            .then(function () {
            _this.images = _this.images.filter(function (h) { return h !== image; });
            if (_this.selectedImage === image) {
                _this.selectedImage = null;
            }
        });
    };
    ImageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-images',
            templateUrl: './../../../view/image.component.html',
            styleUrls: ['./../../../css/image.component.css'],
            //provider make Angular creating new instance of ImageService during AppComponent creation
            providers: [image_service_1.ImageService]
        }), 
        __metadata('design:paramtypes', [image_service_1.ImageService, router_1.Router])
    ], ImageComponent);
    return ImageComponent;
}());
exports.ImageComponent = ImageComponent;
//# sourceMappingURL=image.component.js.map