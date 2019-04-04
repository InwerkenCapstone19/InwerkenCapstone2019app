import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataReadingService {

  constructor(private _http:HttpClient) { }


  public getDataReadings(sensorType:string,sensorId:number=null){
  	let _url = 'https://172.103.0.2/red/dataReadings?type='+sensorType;
  	
  	if(sensorId!==null){
  		return this._http.get(_url+'id='+sensorId);
  	}else{
  		return this._http.get(_url);
  	}
  }
}
