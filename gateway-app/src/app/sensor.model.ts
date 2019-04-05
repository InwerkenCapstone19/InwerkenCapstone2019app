import { DataReading } from './data-reading.model'
export class Sensor {
	sensorId:number;
	dataType:string;
	unitName:string;
	dataReadings:DataReading[];
}