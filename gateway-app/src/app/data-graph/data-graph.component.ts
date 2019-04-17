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
  chartData = [];
  dateForGraph = new Date();
  
  constructor(private data:DataReadingService ) { }

  ngOnInit() {
  	this.getChartData();
  	console.log(this.chartData);
    //DATE TO USE FOR X AXIS DISPLAY
    //TODO move this to function
    let d = new Date();
    d.setHours(d.getHours()-264);
    console.log(d.toDateString());

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
          display: true,
          type: 'time',
          distribution: 'linear',
          bounds: 'data',
          ticks: {
          	suggestedMin: '2019/04/01',
          },
          time: {
          	min:d.toDateString(),
          }
        }],
        yAxes: [{
          display: true,
          distribution: 'linear',
          bounds: 'data',
        }],
      }
    }
  });
  this.chart.update();
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
