/**
 * Created by jorgma on 2017-07-09.
 */

import {Component, OnInit, AfterViewInit, OnDestroy} from "@angular/core";
import {WeatherService} from "./weather.service";
import {WeatherForecast} from "./weather.model";

@Component({
  selector: 'weather',
  templateUrl: 'weather.component.html'
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
    // this.intervalId = setInterval(() => , 3000);
  }


  public getWeatherForecast() {
    this.weatherService.getWeatherForecast()
      .then((res) => {
        return this.weatherService.mapForecast(res);
      })
      .then((weatherForecast) => {
        this.weatherForecast = weatherForecast;
        console.log(this.weatherForecast);
      })

  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
