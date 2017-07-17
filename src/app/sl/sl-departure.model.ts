/**
 * Created by jorgma on 2017-07-06.
 */

export class SlDeparture {
  groups:Group[];
  hasResultData:boolean;
  hasStopPointDeviations:boolean;
  lastUpdate:string;

}


export class Group {
  name:string;
  groupId:string;
  currentServerTime:string;
  departures:Departure[];
  title:string;
  transportSymbol:string;
  type:string;
}

export class Departure {
  destination:string;
  deviations:any[];
  displayTime:string;
  expectedDateTime:Date;
  lineNumber:string;
  stopPointNumber:string;
}


