/**
 * Created by jorgma on 2017-07-16.
 */
import {Component, OnInit, Input, ChangeDetectionStrategy} from "@angular/core";
import {WeatherForecast, WEATHER_SYMBOL, TimeSeries} from "../weather.model";
import {WeatherService} from "../weather.service";


@Component({
  selector: 'current-weather',
  templateUrl: 'current-weather.component.html',
  styleUrls: ['../weather.component.scss', 'current-weather.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CurrentWeatherComponent implements OnInit {
  weather_symbol = WEATHER_SYMBOL;
  currentTimeSeries: TimeSeries;

  @Input() set currentWeather(weather: WeatherForecast) {
    if (weather.currentTimeSeries) {
      this.currentTimeSeries = weather.currentTimeSeries;
    }
  }

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
  }


  public getWeatherImageClass(): string {
    return this.weatherService.getWeatherImageClass(this.currentTimeSeries);
  }


}
