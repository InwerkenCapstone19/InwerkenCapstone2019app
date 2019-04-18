import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { DataReadingService} from './data-reading.service';
import { SensorService } from './sensor.service';
import { Sensor } from './sensor.model';
import { DataReading } from './data-reading.model';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsDataService {

  constructor(private dataReadings:DataReadingService, private sensors:SensorService) { 
  	this.updateSensors();
  	this.updateDataReadings();
  }


  private _sensorSource:BehaviorSubject<Sensor[]> = new BehaviorSubject([]);
  private _dataReadingSource:BehaviorSubject<DataReading[]> = new BehaviorSubject([]);
  sensorData = this._sensorSource.asObservable();
  dataReadingsData = this._dataReadingSource.asObservable();
 

  updateSensors(sensorId:number=null,unitName:string=null) {
    this.sensors.getSensors(sensorId,unitName).subscribe(res => this._sensorSource.next(res))
  }
  updateDataReadings(sensorType:string="Kanban",sensorId:number=null) {
    this.dataReadings.getDataReadings(sensorType,sensorId).subscribe(res => this._dataReadingSource.next(res))
  }
}

