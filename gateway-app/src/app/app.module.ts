import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HomeComponent } from './home/home.component';
import { DiscoverComponent } from './discover/discover.component';
import { ServiceComponent } from './service/service.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SensorTypeSelectorComponent } from './sensor-type-selector/sensor-type-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    HomeComponent,
    DiscoverComponent,
    ServiceComponent,
    NavBarComponent,
    SensorTypeSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
