import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {DiscoverComponent} from './discover/discover.component';
import {AnalyticsComponent} from './analytics/analytics.component'
import {AssignmentComponent} from './assignment/assignment.component'
import {ServiceComponent} from './service/service.component'
import {SettingsComponent} from './settings/settings.component'


const routes: Routes = [
	{path: 'home', component:HomeComponent},
	{path: '',redirectTo: '/home', pathMatch: 'full' },
	{path: 'analytics', component:AnalyticsComponent},
	{path: 'discover', component:DiscoverComponent},
	{path: 'assignment', component:AssignmentComponent},
        {path: 'service', component:ServiceComponent},
        {path: 'settings', component:SettingsComponent}
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
