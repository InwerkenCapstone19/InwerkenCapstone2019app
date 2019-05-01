import { Component, OnInit } from '@angular/core';
import {AssetService} from '../asset.service'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAccordion, MatExpansionPanel,MatExpansionPanelTitle,MatExpansionPanelHeader} from '@angular/material/expansion';
import { MatTable } from '@angular/material';
import {SensorService } from '../sensor.service';
import { Sensor } from '../sensor.model'
@Component({
  selector: 'app-asset-display',
  templateUrl: './asset-display.component.html',
  styleUrls: ['./asset-display.component.css']
})
export class AssetDisplayComponent implements OnInit {
  assets:AssetWithSensors[];
  topLevelAssets:Asset[];
  constructor(private assetService:AssetService, private sensorService:SensorService) { }

  ngOnInit() {
  	this.assetService.getAssets().subscribe(assets => {
  		this.assets=<AssetWithSensors[]>assets;
      for (let asset of this.assets){
        this.assetService.getUnitsInAsset(asset.assetId).subscribe(sensors => asset.sensors = sensors)
      }
  		this.topLevelAssets=this.getTopLevelAssets(<Asset[]>assets)
  	})
  }

  getChildren(asset:Asset,assets:Asset[]){
	let listOfAssets:Asset[]=[];
	for (let assetToCheck of assets){
		if (assetToCheck.assetId!=null && assetToCheck.assetId!=undefined && assetToCheck.parentId == asset.assetId){
			listOfAssets.push(assetToCheck);
	  	}
	}
	return listOfAssets;
  }

  getTopLevelAssets(assets:Asset[]){
  	let topLevelAssets:Asset[]=[];
  	for (let asset of assets){
  		if (asset.parentId == null || asset.parentId== undefined){
  			topLevelAssets.push(asset);
  		}
  	}
  	return topLevelAssets;
  }

  // getUnitsInAsset(assetId){
  //   this.assetService.getUnitsInAsset(assetId).subscribe(sensors => {return sensors})
  // }

}


export interface Asset{
	assetId:number;
	name:string;
	parentId:number;
}
export interface AssetWithSensors{
	assetId:number;
	name:string;
	parentId:number;
	sensors:Sensor[];
}