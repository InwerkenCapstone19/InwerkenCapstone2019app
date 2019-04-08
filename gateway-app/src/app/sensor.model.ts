import { DataReading } from './data-reading.model'
export interface Sensor {
	sensorId:number;
	dataType:string;
	unitName:string;
	dataReadings:DataReading[];
}