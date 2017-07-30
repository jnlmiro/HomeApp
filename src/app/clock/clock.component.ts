/**
 * Created by jorgma on 2017-07-09.
 */
import * as moment from "moment";
import {Component, OnInit, OnDestroy} from "@angular/core";

@Component({
  selector: 'clock',
  templateUrl: 'clock.component.html',
  styleUrls: ['clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {

  currentTime: any;
  intervalId: number;

  constructor() {
  }

  ngOnInit() {
    moment.locale('se');
    this.intervalId = setInterval(() => this.updateCurrentTime());
  }


  public updateCurrentTime() {
    this.currentTime = moment().format('LTS');
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
