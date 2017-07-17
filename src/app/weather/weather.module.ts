/**
 * Created by jorgma on 2017-07-09.
 */
import {NgModule} from '@angular/core';

import {WeatherComponent}   from './weather.component';
import {WeatherService} from "./weather.service";
import {TimeSeriesComponent} from "./timeseries/timeseries.component";
import {CurrentWeatherComponent} from "./current-weather/current-weather.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [BrowserModule],
  exports: [WeatherComponent],
  declarations: [WeatherComponent, TimeSeriesComponent, CurrentWeatherComponent],
  providers: [WeatherService],
})
export class WeatherModule {
}
