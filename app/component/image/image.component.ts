import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Image} from './../../model/image/image';
import { ImageService } from './../../service/image.service';


@Component({
    moduleId: module.id,
  	selector: 'my-images',
  	templateUrl:  './../../../view/image.component.html',
    styleUrls: ['./../../../css/image.component.css'],	
  	//provider make Angular creating new instance of ImageService during AppComponent creation
	  providers: [ImageService]
})

export class ImageComponent implements OnInit {

	images: Image[];
	selectedImage: Image;

	constructor(
			private imageService: ImageService,
      private router : Router
		){};

	onSelect(image: Image): void {
  	  this.selectedImage = image;
  }

  getImages(): void{
  	//receive Promise data from ImageService
   	this.imageService.getImages().then(images => this.images = images);
     console.log( this.images);
  }

  //LifeCycle Hook that get list of Images when AppComponent activates
  ngOnInit():void {
  	this.getImages();
	}

  add(firstname: string): void {
    firstname = firstname.trim();
    if (!firstname) { return; }
    this.imageService.create(firstname)
      .then(image => {
        this.images.push(image);
        this.selectedImage = null;
    });
  }

  delete(image: Image): void {
  this.imageService
      .delete(image.id)
      .then(() => {
        this.images = this.images.filter(h => h !== image);
        if (this.selectedImage === image) { this.selectedImage = null; }
   });
}



}

