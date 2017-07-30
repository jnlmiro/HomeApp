/**
 * Created by jorgma on 2017-07-06.
 */
import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Departure, SlDeparture, Group} from "./sl-departure.model";

const STATIONS = {
  'Ropsten': 9220,
  'Drevergatan': 1145
};

const TYPES = {
  'BusGroups': 'Buss',
  'MetroGroups': 'Tunnelbana'
};


const TYPE_IMGS = {
  'Bus': 'bus',
  'Metro': 'metro'
};


const NUMBER_OF_DEPARTURES = 4;

@Injectable()
export class SlDepartureService {
  private url: string = 'http://sl.se/api/sv/RealTime/GetDepartures/';

  constructor(private http: Http) {

  }


  public getDepartures(stationName: string) {
    let stationId = this.getStationId(stationName);
    return this.http.get(`${this.url}${stationId}`).toPromise()
      .then((res) => this.mapDepartures(res));
  }


  private getStationId(name: string) {
    return STATIONS[name];
  }

  private mapDepartures(res): SlDeparture {

    let resObj = res.json();
    let slDeparture = new SlDeparture();
    let mappedGroups: Group[] = [];
    if (resObj.data && resObj.data.HasResultData === true) {
      let dataObjProperties = Object.keys(resObj.data);
      for (let i = 0; i < dataObjProperties.length; i++) {
        let property = dataObjProperties[i];
        if (typeof resObj.data[property] === "object") {
          let tmpGroups = this.mapGroups(resObj.data[property], property);
          mappedGroups.push(...tmpGroups);
        }
      }
    }

    slDeparture.hasResultData = resObj.data.HasResultData;
    slDeparture.hasStopPointDeviations = resObj.data.HasStopPointDeviations;
    slDeparture.lastUpdate = resObj.data.LastUpdate;
    slDeparture.groups = mappedGroups;
    return slDeparture;
  }


  private mapGroups(groups: any[], groupName: string): Group[] {
    let departureGroups: Group[] = [];

    for (let i = 0; i < groups.length; i++) {
      let departureGroup = new Group();

      departureGroup.name = groupName;
      departureGroup.groupId = groups[i].GroupId;

      departureGroup.currentServerTime = groups[i].CurrentServerTime;

      departureGroup.title = groups[i].Title;
      departureGroup.transportSymbol = groups[i].TransportSymbol;
      departureGroup.type = TYPES[groupName];
      departureGroup.departures = [];

      if (groups[i].Departures) {
        let maxNumberOfDepartures = groups[i].Departures.length > NUMBER_OF_DEPARTURES ? NUMBER_OF_DEPARTURES : groups[i].Departures.length;
        for (let j = 0; j < maxNumberOfDepartures; j++) {
          departureGroup.departures.push(this.mapDeparture(groups[i].Departures[j]))
        }
      }

      departureGroups.push(departureGroup);
    }
    return departureGroups;
  }

  private mapDeparture(departure: any) {
    let groupDeparture = new Departure();
    groupDeparture.destination = departure.Destination;
    groupDeparture.deviations = departure.Deviations;
    groupDeparture.displayTime = departure.DisplayTime;
    groupDeparture.expectedDateTime = departure.ExpectedDateTime;
    groupDeparture.lineNumber = departure.LineNumber;
    groupDeparture.stopPointNumber = departure.StopPointNumber;
    return groupDeparture;
  }


  public getTransportationImageClass(group: Group) {
    return TYPE_IMGS[group.type];
  }
}
