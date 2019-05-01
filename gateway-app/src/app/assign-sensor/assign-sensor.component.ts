import { Component, OnInit,ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';
import { AssetService } from '../asset.service';
import { MatStepper } from '@angular/material';
import { SensorService } from '../sensor.service';

@Component({
  selector: 'app-assign-sensor',
  templateUrl: './assign-sensor.component.html',
  styleUrls: ['./assign-sensor.component.css']
})
export class AssignSensorComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;

  formGroup: FormGroup;
  formArray:FormArray;
  sensorName:FormControl;
  assetName:FormControl;

  sensors;
  assets;

  constructor(private _formBuilder: FormBuilder,private sensorService:SensorService, private assetService:AssetService) { }

  ngOnInit() {
  	this.sensorService.getSensors().subscribe(sensors => {this.sensors = sensors;console.log(sensors)})
  	console.log(this.sensors)
    this.assetService.getAssets().subscribe(assets => this.assets = assets)

  	this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
        	sensorName:['',Validators.required]
        }),
        this._formBuilder.group({
        	assetName:['', Validators.required]
        })
      ])
    });
    
  }

  submit(){
    let unitInAssetToSubmit;

    unitInAssetToSubmit = {"assetId":this.formGroup.value.formArray[1].assetName,"unitName":this.formGroup.value.formArray[0].sensorName}

    this.assetService.postUnitInAsset(unitInAssetToSubmit).subscribe();
  
  }

  nextClicked(event) {
    // complete the current step
    this.stepper.selected.completed = true;
    // move to next step
    this.stepper.next();
  }
  reset(){
    this.formGroup.reset()
    this.stepper.reset()
  }

}
