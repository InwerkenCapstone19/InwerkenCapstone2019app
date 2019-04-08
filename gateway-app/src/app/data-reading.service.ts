import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataReading } from './data-reading.model';

@Injectable({
  providedIn: 'root'
})
export class DataReadingService {

  constructor(private _http:HttpClient) { }


  public getDataReadings(sensorType:string,sensorId:number=null){
    //base url, which has sensor type included
  	let _url = 'https://172.103.0.2/red/dataReadings?type='+sensorType;
  	
    //if no id is passed, get all readings, otherwise get readings from certain id
  	if(sensorId!==null){
  		return this._http.get<DataReading[]>(_url+'&id='+sensorId);
  	}else{
  		return this._http.get<DataReading[]>(_url);
  	}
  }
}
