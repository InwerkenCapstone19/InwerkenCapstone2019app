import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DiscoverComponent} from './discover/discover.component';
import {AnalyticsComponent} from './analytics/analytics.component'
const routes: Routes = [
	{path: '', component:HomeComponent },
	{path: '/discover', component:DiscoverComponent},
	{path: '/analytics', component:AnalyticsComponent}
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
