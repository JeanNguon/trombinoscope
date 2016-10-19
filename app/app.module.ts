/////////////////////// Module ///////////////////////
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in_memory/in-memory-data.service';

/////////////////////// Extension ///////////////////////
import './extension/rxjs-extension'

/////////////////////// Component ///////////////////////
import { AppComponent }  from './component/app/app.component';
import { PersonComponent }  from './component/person/person.component';
import { PersonDetailComponent } from './component/person/person_detail/person-detail.component';
import { DashboardComponent }  from './component/dashboard/dashboard.component';
import { PersonSearchComponent } from './component/person/person_search/person-search.component';

import { CarouselComponent }  from './component/carousel/carousel.component';

/////////////////////// Service ///////////////////////
import { PersonService } from './service/person.service';

/////////////////////// Routing ///////////////////////
import { AppRoutingModule } from './routing/app-routing.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
  	AppComponent,
    PersonComponent,
    PersonDetailComponent,
    PersonSearchComponent,
    DashboardComponent,
    CarouselComponent,
  ],
  providers: [
  	PersonService,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
