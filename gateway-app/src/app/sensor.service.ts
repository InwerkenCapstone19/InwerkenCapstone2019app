import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Sensor } from './sensor.model';
import { DataReadingService } from './data-reading.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private _http:HttpClient, private dataServ:DataReadingService) { }

  private _requestSensors(sensorId:number=null,unitName:string=null){
 	 let _url = 'https://172.103.0.2/red/sensors'

   //if at least one parameter is passed
   if(sensorId !== null || unitName !== null ){
     //if both parameters are passed
     if (sensorId !== null && unitName !== null){
       return this._http.get<Sensor[]>(_url+`?id={{sensorId}}&unitName={{unitName}}`);
     }
     //if only sensorId is passed
     else if (sensorId!==null){
       return this._http.get<Sensor[]>(_url+`?id={{sensorId}}`);
     }
     //if only unitName is passed
     else if (unitName!==null){
       return this._http.get<Sensor[]>(_url+`?unitName={{unitName}}`);
     }
   }
   //no parameters passed and get all sensors
   else{
     return this._http.get<Sensor[]>(_url);
   }
  }
  private _fillSensors(sensors:Observable<Sensor[]>){
    //array to be returned of sensors
    let sensorArray:Array<Sensor>;

    //subscribe to observable to fire get request
    sensors.subscribe(res =>sensorArray);

    //for each sensor use DataReadingService to issue a get request specific to that sensor
    //and store the results in the senor.dataReadings array
    for (var sensor of sensorArray) {
      this.dataServ.getDataReadings(sensor.dataType,sensor.sensorId).subscribe(res => sensor.dataReadings);
    }
    return sensorArray;
  }

  public getSensors(){
    return this._fillSensors(this._requestSensors());
  }
}
