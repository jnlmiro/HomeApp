/**
 * Created by jorgma on 2017-07-09.
 */

import {Component, OnInit, AfterViewInit, OnDestroy} from "@angular/core";
import {WeatherService} from "./weather.service";
import {WeatherForecast, TimeSeries} from "./weather.model";

@Component({
  selector: 'weather',
  templateUrl: 'weather.component.html',
  styleUrls: ['weather.component.scss']
})
export class WeatherComponent implements OnInit, AfterViewInit, OnDestroy {


  weatherForecast: WeatherForecast;
  intervalId: number;


  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
  }


  ngAfterViewInit(): void {
    this.getWeatherForecast();
    this.intervalId = setInterval(() => this.getWeatherForecast(), 30 * 60000);
  }


  public getWeatherForecast() {
    this.weatherService.getWeatherForecast()
      .then((res) => {
        return this.weatherService.mapForecast(res);
      })
      .then((weatherForecast) => {
        this.weatherForecast = weatherForecast;
      })

  }


  public getMinMaxParameterValue(timeSeries: TimeSeries[], paramName: string, min: boolean): number {
    return this.weatherService.getMinMaxParameterValue(timeSeries, paramName, min);
  }

  public getMeanParameterValue(timeSeries: TimeSeries[], paramName: string): number {
    return this.weatherService.getMeanParameterValue(timeSeries, paramName);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
