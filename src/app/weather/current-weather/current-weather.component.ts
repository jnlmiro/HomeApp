/**
 * Created by jorgma on 2017-07-16.
 */
import {Component, OnInit, Input} from "@angular/core";
import {WeatherForecast, WEATHER_SYMBOL, TimeSeries} from "../weather.model";


@Component({
  selector: 'current-weather',
  templateUrl: 'current-weather.component.html',
  styleUrls: ['current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  weather_symbol = WEATHER_SYMBOL;
  currentTimeSeries:TimeSeries;

  @Input() set currentWeather(weather:WeatherForecast) {
    if(weather.currentTimeSeries) {
      this.currentTimeSeries = weather.currentTimeSeries;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }
}
