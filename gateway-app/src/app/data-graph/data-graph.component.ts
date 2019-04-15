import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Chart } from 'chart.js';

import { DataReadingService } from '../data-reading.service';

@Component({
  selector: 'app-data-graph',
  templateUrl: './data-graph.component.html',
  styleUrls: ['./data-graph.component.css']
})
export class DataGraphComponent implements OnInit {
  @ViewChild('lineChart') private lineChartRef:ElementRef;

  chart:any;
  chartData = [{x:null,y:null}]
  
  constructor(private data:DataReadingService ) { }

  ngOnInit() {
  	this.getChartData();
  	console.log(this.chartData);

  	  //implementation of chart.js
  this.chart = new Chart(this.lineChartRef.nativeElement, {
    type: 'line',
    data: {
      labels: ["Time","Value"], // your labels array
      datasets: [
        {
          data: this.chartData, // your data array
          borderColor: '#00AEFF',
          fill: false
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }],
      }
    }
  });
  }

  //calls dataReadingService instance and assigns that
  getChartData(sensorType:string="Kanban",sensorId:number=null){
  	this.data.getDataReadings(sensorType,sensorId).subscribe(res => 
  		{	//for each value in the array returned by the data service
  			for(let singleReading of res){
  				//add it's date and value to chartData
  				this.chartData.push({x:singleReading.dateTime, y:singleReading.value});
  			}
  		}
  	);
  }




}
