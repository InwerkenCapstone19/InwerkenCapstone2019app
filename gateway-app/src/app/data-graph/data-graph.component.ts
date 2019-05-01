import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';
import { AnalyticsDataService } from '../analytics-data.service';

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
  
  constructor(private data:AnalyticsDataService ) { }

  ngOnInit() {
  	
    //DATE TO USE FOR X AXIS DISPLAY
    //TODO move this to a function
    let d = new Date();
    d.setHours(d.getHours()+4);
    console.log(d.toString());

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
          	min:d.toString(),
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
    this.getChartData();
    console.log(this.chartData);
    //this.chart.update();
  }

  //calls dataReadingService instance and assigns that
  getChartData(sensorType:string="Kanban",sensorId:number=null){

  	this.data.dataReadingsData.subscribe(res => 
  		{	
        this.chartData.length=0;
        res.map((elem,i,res )=> {this.chartData.push({'x':elem.dateTime,'y':elem.value})})
        this.chart.update();
        console.log("Got new chart data")
  		}
  	);
  }




}
