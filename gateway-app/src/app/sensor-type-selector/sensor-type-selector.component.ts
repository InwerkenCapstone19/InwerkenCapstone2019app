import { Component, OnInit } from '@angular/core';
import {AnalyticsDataService} from '../analytics-data.service';

@Component({
  selector: 'app-sensor-type-selector',
  templateUrl: './sensor-type-selector.component.html',
  styleUrls: ['./sensor-type-selector.component.css']
})
export class SensorTypeSelectorComponent implements OnInit {

  constructor(private data:AnalyticsDataService) { }

  ngOnInit() {
  }

  getKanban() :void{
    this.data.updateSensors(null,null,"Kanban");
  }
  getHumidity() :void{
  	this.data.updateSensors(null,null,"Humidity");
  }
  getTemperature() :void{
  	this.data.updateSensors(null,null,"Temperature");
  }   
}
