import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { PersonDetailComponent } from './model/person/person-detail.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule //gestion des formulaires
  ],
  declarations: [
    AppComponent,
    PersonDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
