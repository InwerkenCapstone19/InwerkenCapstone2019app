import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DiscoverComponent } from './discover/discover.component';
import { AssignmentComponent } from './assignment/assignment.component'
import { ServiceComponent } from './service/service.component';
import { SettingsComponent } from './settings/settings.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SensorTypeSelectorComponent } from './sensor-type-selector/sensor-type-selector.component';
import { SensorTableComponent } from './sensor-table/sensor-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnalyticsComponent,
    DiscoverComponent,
    AssignmentComponent,
    ServiceComponent,
    SettingsComponent,
    NavBarComponent,
    SensorTypeSelectorComponent,
    SensorTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
