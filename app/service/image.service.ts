import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Image } from './../model/image/image';


@Injectable() //emits metadata
export class ImageService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private imagesUrl = './../../in_memory/images'; //URL to web API	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // TODO: change error console to
		return Promise.reject(error.message || error);
	}
	constructor(private http: Http){};


	getImages(): Promise<Image[]>{
			//convert Observable to Promise
			return this.http.get(this.imagesUrl)
 			.toPromise()
 			//pass the promise back
            .then(response => response.json().data as Image[])
            .catch(this.handleError);
	};
	getImage(id: number): Promise<Image> {
 		return this.getImages()
            .then(images => images.find(image => image.id === id));
	};

	update(image: Image): Promise<Image> {
	  const url = `${this.imagesUrl}/${image.id}`;
	  return this.http
	    .put(url, JSON.stringify(image), {headers: this.headers})
	    .toPromise()
	    .then(() => image)
	    .catch(this.handleError);
	}

	create(firstname: string): Promise<Image> {
	  return this.http
	    .post(this.imagesUrl, JSON.stringify({firstname: firstname}), {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data)
	    .catch(this.handleError);
	}

	delete(id: number): Promise<void> {
	  const url = `${this.imagesUrl}/${id}`;
	  return this.http.delete(url, {headers: this.headers})
	    .toPromise()
	    .then(() => null)
	    .catch(this.handleError);
	}	
}