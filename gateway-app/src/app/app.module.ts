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
         MatSortModule, MatTableModule, MatStepperModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { DataGraphComponent } from './data-graph/data-graph.component';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { AssignmentStepperComponent } from './assignment-stepper/assignment-stepper.component';
import { AssetDisplayComponent } from './asset-display/asset-display.component';
import { AssignSensorComponent } from './assign-sensor/assign-sensor.component'

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
    AssignmentStepperComponent,
    AssetDisplayComponent,
    AssignSensorComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatStepperModule,
    HttpClientModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey:"INSERT KEY"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
