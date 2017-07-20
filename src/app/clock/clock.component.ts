/**
 * Created by jorgma on 2017-07-09.
 */
import * as moment from 'moment';
import {Component, OnInit, OnDestroy, NgZone} from '@angular/core';

@Component({
  selector: 'clock',
  templateUrl: 'clock.component.html',
  styleUrls: ['clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {

  currentTime: any;
  intervalId: number;

  constructor(private zone:NgZone) {
  }

  ngOnInit() {
    moment.locale('se');
    this.intervalId = setInterval(() => this.updateCurrentTime())
  }


  public updateCurrentTime() {
    this.currentTime = moment().format('LTS');
    this.zone.run(() => {});
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
