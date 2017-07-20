/**
 * Created by jorgma on 2017-07-06.
 */
import {Component, OnInit, OnDestroy, Input} from "@angular/core";
import {SlDepartureService} from "./sl-departure.service";
import {SlDeparture, Departure, Group} from "./sl-departure.model";
import {style, animate, transition, trigger} from "@angular/animations";

@Component({
  selector: 'sl-departure',
  templateUrl: 'sl-departure.component.html',
  styleUrls: ['sl-departure.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
})
export class SlDepartureComponent implements OnInit, OnDestroy {

  slDeparture: SlDeparture;
  updateInterval: number;
  departureGroupType:string;

  @Input() stationName: string;
  @Input() set depGroupType(groupType:string) {
    this.departureGroupType = groupType;
  }

  constructor(private slDepartureService: SlDepartureService) {
    this.updateInterval = setInterval(() => this.getDepartures(this.stationName), 30000)
  }

  ngOnInit() {
    this.getDepartures(this.stationName);

  }

  ngOnDestroy() {
    clearInterval(this.updateInterval)
  }

  public getDepartures(stationName: string) {
    this.slDepartureService.getDepartures(stationName)
      .then((slDepartures) => this.slDeparture = slDepartures)
  }


  public shouldAlert(departure: Departure): boolean {
    return (departure.displayTime === 'Nu' || departure.displayTime !== 'Nu' && departure.displayTime.split(' min')[0].length === 1 && parseInt(departure.displayTime) <= 5)

  }


  public getTransportationImageClass(group: Group): string {

    return this.slDepartureService.getTransportationImageClass(group);
  }

}
