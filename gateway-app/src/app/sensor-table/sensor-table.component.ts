import { Component, OnInit, OnChanges} from '@angular/core';
import { AnalyticsDataService } from '../analytics-data.service';

import { Sensor } from '../sensor.model';

import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
         MatSortModule, MatTableModule, MatTableDataSource } from '@angular/material';

import { DataSource } from '@angular/cdk/collections'

import { Observable } from 'rxjs'



@Component({
  selector: 'app-sensor-table',
  templateUrl: './sensor-table.component.html',
  styleUrls: ['./sensor-table.component.css']
})
export class SensorTableComponent implements OnInit{
  tableDataSource:MatTableDataSource<any>;
  sensorArray:Sensor[];

  constructor(private data: AnalyticsDataService) { 
  this.tableDataSource = new MatTableDataSource<Sensor[]>();


  }
   

  ngOnInit() {
    this.data.sensorData.subscribe(res => this.tableDataSource.data = res);

  }


  //name and order of columns in table
  displayedColumns=['unitName', 'sensorId', 'dataType', 'lastReading'];
}







