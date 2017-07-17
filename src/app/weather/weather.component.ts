/**
 * Created by jorgma on 2017-07-09.
 */

import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./weather.service";
import {WeatherForecast, TimeSeries} from "./weather.model";

@Component({
  selector: 'weather',
  templateUrl: 'weather.component.html'
})
export class WeatherComponent implements OnInit {
  weatherForecast: WeatherForecast;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.getWeatherForecast();
  }


  public getWeatherForecast() {
    this.weatherService.getWeatherForecast()
      .then((weatherForecast) => {
        this.weatherForecast = weatherForecast;
        console.log(this.weatherForecast);
      });
  }

}
