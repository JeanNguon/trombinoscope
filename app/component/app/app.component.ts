import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
	<nav>
    	<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    	<a routerLink="/persons" routerLinkActive="active">Persons</a>
      <a routerLink="/carousel" routerLinkActive="active">Carousel</a>
    </nav>
    <router-outlet></router-outlet>
  `,
   styleUrls: [ './css/app.component.css' ],

})

export class AppComponent {
  title = 'Trombinosgop';
}
