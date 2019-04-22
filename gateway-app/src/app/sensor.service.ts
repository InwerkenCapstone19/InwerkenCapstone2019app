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
  private _requestSensors(sensorId:number=null,unitName:string=null,dataType:string=null){
 	  //CHANGE THIS TO WHERE YOUR GATEWAY IS BEING HOSTED!
     let _url = 'https://172.103.0.2/red/sensors'

     let _numberOfParametersPassed = 0;
     
     //loop through parameters passed in, and count how many of them are not null
     for (let param of [sensorId,unitName,dataType]){
       if (param !==null){
         _numberOfParametersPassed+=1;
         console.log(param);
       }
     }
     console.log("PARAMS : " +_numberOfParametersPassed);

     //determine how many paramaters are passed in
     switch(_numberOfParametersPassed){
       //if no parameters passed
       case 0:{
         //get all sensors
         return this._http.get<Sensor[]>(_url);
         break;
       }
       //if only one paramater passed
       case 1:{
         if (sensorId!==null){
           //get results by sensorId if it was passed
           console.log(`fetching sensors with sensorId ${sensorId}`);
           return this._http.get<Sensor[]>(_url+`?id=${sensorId}`);
           break;
         }
         else if (unitName!==null){
           //get results by unitName if it was passed
           console.log(`fetching sensors with unitName ${unitName}`);

           return this._http.get<Sensor[]>(_url+`?unitName=${unitName}`);
           break;
         }
         else if (dataType!==null){
           //get results by dataType if it was passed
           console.log(`fetching sensors with dataType ${dataType}`);

           return this._http.get<Sensor[]>(_url+`?dataType=${dataType}`);
           break;
         }
         break;
       }
       //if two paramaters passed in, need to determine which two
       case 2:{
         if(sensorId!==null && unitName!==null){
           //get results by sensorId and unitName if they were the ones passed
           return this._http.get<Sensor[]>(_url+`?id=${sensorId}&unitName=${unitName}`);
         }
         else if(sensorId!==null && dataType!==null){
           //get results by sensorId and dataType if they were the ones passed
           return this._http.get<Sensor[]>(_url+`?id=${sensorId}&dataType=${dataType}`);
         }
         else if(dataType!==null && unitName!==null){
           //get results by dataType and unitName if they were the ones passed
           return this._http.get<Sensor[]>(_url+`?dataType=${dataType}&unitName=${unitName}`);
         }
         break;
       }
       //if all three parameters passed
       case 3:{
         //double check
         if(sensorId!==null && unitName!==null && dataType!==null){
           //get results by sensorId and unitName if they were the ones passed
           return this._http.get<Sensor[]>(_url+`?id=${sensorId}&unitName=${unitName}&dataType=${dataType}`);
         }
         break;
       }
     }




     // //if at least one parameter is passed
     // if(sensorId !== null || unitName !== null ){
     //   //if both parameters are passed
     //   if (sensorId !== null && unitName !== null){
     //     return this._http.get<Sensor[]>(_url+`?id={{sensorId}}&unitName={{unitName}}`);
     //   }
     //   //if only sensorId is passed
     //   else if (sensorId!==null){
     //     return this._http.get<Sensor[]>(_url+`?id={{sensorId}}`);
     //   }
     //   //if only unitName is passed
     //   else if (unitName!==null){
     //     return this._http.get<Sensor[]>(_url+`?unitName={{unitName}}`);
     //   }
     // }
     // //no parameters passed and get all sensors
     // else{
     //   return this._http.get<Sensor[]>(_url);
     // }
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


  

  public getSensors(sensorId:number=null,unitName:string=null,dataType:string=null){
    //return this._requestSensors();
    return this._fillSensors(this._requestSensors(sensorId,unitName,dataType));
  }
}
