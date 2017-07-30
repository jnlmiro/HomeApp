/**
 * Created by jorgma on 2017-07-10.
 */
import {Component, OnInit, Input, ChangeDetectionStrategy} from "@angular/core";
import {WeatherForecast, TimeSeries} from "../weather.model";
import {WeatherService} from "../weather.service";

@Component({
  selector: 'timeseries',
  templateUrl: 'timeseries.component.html',
  styleUrls: ['../weather.component.scss','timeseries.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TimeSeriesComponent implements OnInit {

  @Input() weather: WeatherForecast;

  constructor(private weatherService:WeatherService) {
  }

  ngOnInit(): void {
  }


  public getWeatherImageClass(timeSeries:TimeSeries):string {
    return this.weatherService.getWeatherImageClass(timeSeries);

  }

}
