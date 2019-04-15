import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataReadingService } from '../data-reading.service';
import { SensorService } from '../sensor.service';

import { Sensor } from '../sensor.model';
import { DataReading } from '../data-reading.model';

import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
         MatSortModule, MatTableModule, MatTableDataSource } from '@angular/material';

import { DataSource } from '@angular/cdk/collections'

import { Observable } from 'rxjs'




@Component({
  selector: 'app-sensor-table',
  templateUrl: './sensor-table.component.html',
  styleUrls: ['./sensor-table.component.css']
})
export class SensorTableComponent implements OnInit {
  dataSource:MatTableDataSource<any>;
  sensorArray:Sensor[];

  constructor(private sensorServ: SensorService, private cd:ChangeDetectorRef) { }

  dummyArray = [{sensorId:"thisisatest",alias:"AlsoATest",dataReading:["taylor","Nikoli"]}]
   

  ngOnInit() {
    this.dataSource = new MatTableDataSource([]);
    this.sensorServ.getSensors().subscribe(sensorArray => {
      this.dataSource = new MatTableDataSource(sensorArray)
      console.log(this.dataSource.data);
      console.log(sensorArray);
    });


  }


  //name and order of columns in table
  displayedColumns=['unitName', 'sensorId', 'dataType', 'lastReading'];
}



// export class SensorDataSource extends DataSource<any> {
//   constructor(private sensorServ: SensorService) {
//     super();
//   }
//   connect(): Observable<Sensor[]> {
//     return this.sensorServ.getSensors();
//   }
//   disconnect() {}
// }