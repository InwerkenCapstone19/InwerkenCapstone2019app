import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Sensor } from './sensor.model';
import { DataReadingService } from './data-reading.service';
import { Observable, of } from 'rxjs';
import { mergeMap, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private _http:HttpClient, private dataServ:DataReadingService) { }

  //issue get request dependant upon paramaters passed
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
    let finalSensorArray:Sensor[] = [];


    //For each sensor issue a request using the DataReading service
    //and store this result to each sensor's DataReadingsArray
    // return sensors.pipe( switchMap (initialSensorArray =>
    //   {
    //     for (let sensor of initialSensorArray){
    //       this.dataServ.getDataReadings(sensor.dataType,sensor.sensorId).subscribe(
    //         dataReadingsReturned => sensor.dataReadings = dataReadingsReturned)
    //       console.log(`requested datareadings for ${sensor.unitName} unit sensor ${sensor.sensorId})`);
    //       finalSensorArray.push(sensor);
    //     }
    //     return finalSensorArray;

    //   });

    return sensors.pipe(map(sensors => 
      sensors.map(sensor => {
        this.dataServ.getDataReadings(sensor.dataType,sensor.sensorId)
        .subscribe(dataReadingsReturned => sensor.lastDataReading = dataReadingsReturned[0].value) 
        return sensor}
    )))


  };


  

  public getSensors(sensorId:number=null,unitName:string=null){
    //return this._requestSensors();
    return this._fillSensors(this._requestSensors(sensorId,unitName));
  }
}
