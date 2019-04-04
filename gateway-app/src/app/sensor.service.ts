import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private _http:HttpClient) { }

  public getSensors(sensorId:number=null){
 	let _url = 'https://172.103.0.2/red/units'

  	//if no id is passed, get all sensors, otherwise only get sensor with ID
  	if(sensorId!==null){
  		return this._http.get(_url+'id='+sensorId);
  	}else{
  		return this._http.get(_url);
  	}
  }
}
