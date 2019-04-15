import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

import { DataReadingService } from '../data-reading.service';

@Component({
  selector: 'app-data-graph',
  templateUrl: './data-graph.component.html',
  styleUrls: ['./data-graph.component.css']
})
export class DataGraphComponent implements OnInit {
  
  chartData = [{time:null,reading:null}]
  
  constructor(private data:DataReadingService ) { }

  ngOnInit() {
  	this.getChartData();
  	console.log(this.chartData);
  }

  //calls dataReadingService instance and assigns that
  getChartData(sensorType:string="Kanban",sensorId:number=null){
  	this.data.getDataReadings(sensorType,sensorId).subscribe(res => 
  		{	//for each value in the array returned by the data service
  			for(let singleReading of res){
  				//add it's date and value to chartData
  				this.chartData.push({time:singleReading.dateTime, reading:singleReading.value});
  			}
  		}
  	);
  }

}
