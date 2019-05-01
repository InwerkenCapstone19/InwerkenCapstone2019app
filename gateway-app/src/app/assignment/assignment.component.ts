import { Component, OnInit } from '@angular/core';
import { AssignmentStepperComponent } from '../assignment-stepper/assignment-stepper.component';
import { AssetDisplayComponent} from '../asset-display/asset-display.component'
import { AssignSensorComponent } from '../assign-sensor/assign-sensor.component';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
