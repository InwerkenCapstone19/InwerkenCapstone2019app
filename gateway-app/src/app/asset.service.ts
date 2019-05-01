import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sensor } from './sensor.model';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private url = "https://172.103.0.2/red/assets/"
  constructor(private http:HttpClient) { }

  getAssets(query:string=""){
  	return this.http.get(this.url + query);
  }
  postAsset(body:any){
  	return this.http.post(this.url,body)
  }
  postUnitInAsset(body:any){
  	return this.http.post("https://172.103.0.2/red/unitInAsset/",body)
  }
  getUnitsInAsset(assetId){
  	return this.http.get<Sensor[]>("https://172.103.0.2/red/unitInAsset/"+`?assetId=${assetId}`);

  }
}
