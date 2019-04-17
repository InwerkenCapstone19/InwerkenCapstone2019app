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

import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
         MatSortModule, MatTableModule } from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { DataGraphComponent } from './data-graph/data-graph.component';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component'

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
    SensorTableComponent,
    DataGraphComponent,
    MapComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:"INSERT KEY"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
