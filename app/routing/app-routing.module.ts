import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './../component/dashboard/dashboard.component';
import { PersonComponent } from './../component/person/person.component';
import { PersonDetailComponent }  from './../component/person/person_detail/person-detail.component';
import { CarouselComponent } from './../component/carousel/carousel.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: PersonDetailComponent },
  { path: 'persons',     component: PersonComponent },
  { path: 'carousel',     component: CarouselComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
