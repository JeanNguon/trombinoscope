import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './component/app/app.component';
import { PersonComponent }  from './component/person/person.component';
import { PersonDetailComponent } from './component/person/person_detail/person-detail.component';
import { DashboardComponent }  from './component/dashboard/dashboard.component';

import { PersonService } from './service/person.service';

import { AppRoutingModule } from './routing/app-routing.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
   AppRoutingModule,
  ],
  declarations: [
  	AppComponent,
    PersonComponent,
    PersonDetailComponent,
    DashboardComponent,
  ],
  providers: [
  	PersonService,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
