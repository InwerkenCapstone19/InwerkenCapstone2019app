import { Component, OnInit, ViewChild } from '@angular/core';
//import { MatStepperModule } from '@angular/material';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';
import { AssetService } from '../asset.service';
import { MatStepper } from '@angular/material';


@Component({
  selector: 'app-assignment-stepper',
  templateUrl: './assignment-stepper.component.html',
  styleUrls: ['./assignment-stepper.component.css']
})
export class AssignmentStepperComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  isLinear = true;
  formGroup: FormGroup;
  formArray:FormArray;
  assetName:FormControl;
  assetParent:FormControl;
  assets:any;

  constructor(private _formBuilder: FormBuilder,private assetService:AssetService) { }

  ngOnInit() {
    this.assetService.getAssets().subscribe(res => {this.assets = res; this.assets.push({"name":"None"})})
    console.log(this.assets)
  	this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
        	assetName:['',Validators.required]
        }),
        this._formBuilder.group({
        	assetParent:''
        })
      ])
    });
  }

  submit(){
    let assetToSubmit;
    //if None selected for parent
    if (this.formGroup.value.formArray[1].assetParent ==undefined){
      assetToSubmit = {"name":this.formGroup.value.formArray[0].assetName}
    }
    //otherwise get parentId too
    else{
      assetToSubmit = {"name":this.formGroup.value.formArray[0].assetName,"parentId":this.formGroup.value.formArray[1].assetParent}
    }
    this.assetService.postAsset(assetToSubmit).subscribe(res =>
     this.assetService.getAssets().subscribe(res => {this.assets = res; this.assets.push({"name":"None"})}));

    this.reset();
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
