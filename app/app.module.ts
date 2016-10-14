import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './component/app/app.component';
import { PersonComponent }  from './component/person/person.component';
import { PersonDetailComponent } from './model/person/person-detail.component';
import { PersonService } from './service/person.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    	{
    		path: 'persons',
    		component: PersonComponent
    	}
    ])
  ],
  declarations: [
    PersonComponent,
    PersonDetailComponent,
    AppComponent
  ],
  providers: [
  	PersonService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
