import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() lat: number
  @Input() long: number
  @Input() markerLabel: string
  @Input() windowInformation: string
  
  constructor() { }

  ngOnInit() {
  }

}
