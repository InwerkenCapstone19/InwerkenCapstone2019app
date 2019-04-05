import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sensor } from './sensor.model'


@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private _http:HttpClient) { }

  public getSensors(sensorId:number=null,unitName:string=null){
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
}
