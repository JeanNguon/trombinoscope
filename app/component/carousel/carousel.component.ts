// Import Component form the angular core package
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Import the Image interface
import {Image} from './../../model/image/image';
import { ImageService } from './../../service/image.service';


// Compoent Decorator
@Component({
  //Name of our tag
  selector: 'css-carousel',
  //Template for the tag
  templateUrl: './view/carousel.component.html',
  //Styles for the tag
  styleUrls: [ './css/carousel.component.css' ]
})
//Carousel Component itself
export class CarouselComponent implements OnInit{
  images : Image[] = [];

  constructor(
    private imageService: ImageService,
    private router: Router
  ){}
 

   //LifeCycle Hook that get list of Images when AppComponent activates
  ngOnInit():void {
     //images data to be bound to the template
     this.imageService.getImages()
      .then(images => this.images = images);
    }
}


