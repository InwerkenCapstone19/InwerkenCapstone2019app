import { Sensor } from './sensor.model'

export interface Unit{
	unitName:string;
	alias:string;
	sensors:Sensor[];
}