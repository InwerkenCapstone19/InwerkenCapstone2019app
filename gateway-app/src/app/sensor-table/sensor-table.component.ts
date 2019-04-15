import { Component, OnInit } from '@angular/core';
import { DataReadingService } from '../data-reading.service';
import { SensorService } from '../sensor.service';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
         MatSortModule, MatTableModule } from '@angular/material';
import { forkJoin } from 'rxjs';


export interface sensorTableRow {
  sensID: string;
  name: string;
  reading: string;
}

const SENSOR_TABLE_DATA: sensorTableRow[] = [
  {sensID: 'A', name: 'B', reading: 'C'},
];

@Component({
  selector: 'app-sensor-table',
  templateUrl: './sensor-table.component.html',
  styleUrls: ['./sensor-table.component.css']
})
export class SensorTableComponent implements OnInit {

  constructor(private dataServ: DataReadingService, private sensorServ: SensorService) { }
  displayedColumns: string[] = ['sensID', 'name', 'reading'];
  dataSource = SENSOR_TABLE_DATA;
  tableInfo = {sensors:null,readings:null};

  ngOnInit() {
  	this.getTableInfo();
  }

  getTableInfo(){
    this.dataServ.getDataReadings("Kanban").subscribe(readings => this.tableInfo.readings = readings);
    this.sensorServ.getSensors().subscribe(sensors => this.tableInfo.sensors = sensors);
    console.log(this.tableInfo);
  }
}