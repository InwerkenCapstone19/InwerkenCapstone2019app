import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Unit } from './unit.model';
import { SensorService } from './sensor.service';


@Injectable({
  providedIn: 'root'
})
export class UnitService {

  //need to have an HttpClient to talk to the backend, 
  //and a sensor service to give each unit an array of their sensors
  constructor(private _http:HttpClient,private sensServ:SensorService) { }

  //method that queries the database and returns an observable array of units it found
  private _requestUnits(){
  	//base url
  	let _url = 'https://172.103.0.2/red/units';
  	//return the results of the http request
  	return this._http.get<Unit[]>(_url);
  }
  //method to give each unit an array of the sensors it contains
  private _fillUnits(units:Observable<Unit[]>){
  	//array to store the results of observable
  	let unitsArray;
  	
  	//subscribes to the observable (causing the httprequest to fire)
  	units.subscribe(res => unitsArray);

  	for (var unit of unitsArray){
  		//store results of http request in each units sensors array
  		this.sensServ.getSensors(null,unit.unitName).subscribe(units => unit.sensors = units);
  	}

  	return unitsArray;
  }

  //public method to call both the internal functons
  public getUnits(){
  	return this._fillUnits(this._requestUnits());
  }
}
