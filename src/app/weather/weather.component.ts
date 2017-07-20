/**
 * Created by jorgma on 2017-07-09.
 */

import {Component, OnInit, NgZone} from "@angular/core";
import {WeatherService} from "./weather.service";
import {WeatherForecast} from "./weather.model";

@Component({
  selector: 'weather',
  templateUrl: 'weather.component.html'
})
export class WeatherComponent implements OnInit {
  weatherForecast: WeatherForecast = new WeatherForecast();

  constructor(private weatherService: WeatherService, private zone:NgZone) {
  }

  ngOnInit() {
    this.getWeatherForecast();
  }


  public getWeatherForecast() {
    this.weatherService.getWeatherForecast()
      .subscribe((weatherForecast) => {
        this.weatherForecast = weatherForecast;
        /*WTF is making things go out of NG2*/
        this.zone.run(() => {});
      });
  }

}
