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
// Import Component form the angular core package
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var image_service_1 = require('./../../service/image.service');
// Compoent Decorator
var CarouselComponent = (function () {
    function CarouselComponent(imageService, router) {
        this.imageService = imageService;
        this.router = router;
        this.images = [];
    }
    //LifeCycle Hook that get list of Images when AppComponent activates
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        //images data to be bound to the template
        this.imageService.getImages()
            .then(function (images) { return _this.images = images; });
    };
    CarouselComponent = __decorate([
        core_1.Component({
            //Name of our tag
            selector: 'css-carousel',
            //Template for the tag
            templateUrl: './view/carousel.component.html',
            //Styles for the tag
            styleUrls: ['./css/carousel.component.css']
        }), 
        __metadata('design:paramtypes', [image_service_1.ImageService, router_1.Router])
    ], CarouselComponent);
    return CarouselComponent;
}());
exports.CarouselComponent = CarouselComponent;
//# sourceMappingURL=carousel.component.js.map