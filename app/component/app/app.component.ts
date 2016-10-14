import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-persons></my-persons>
  `
})

export class AppComponent {
  title = 'Tour of Developpers';
}
