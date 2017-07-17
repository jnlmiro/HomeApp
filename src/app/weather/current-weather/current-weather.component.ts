/**
 * Created by jorgma on 2017-07-16.
 */
import {Component, OnInit, Input} from "@angular/core";
import {WeatherForecast, WEATHER_SYMBOL} from "../weather.model";


@Component({
  selector: 'current-weather',
  templateUrl: 'current-weather.component.html',
  styleUrls: ['current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  @Input() weather: WeatherForecast;
  weather_symbol = WEATHER_SYMBOL;

  constructor() {
  }

  ngOnInit() {
  }
}
