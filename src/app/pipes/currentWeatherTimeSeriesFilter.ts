/**
 * Created by jorgma on 2017-08-03.
 */
import {Pipe, PipeTransform} from '@angular/core';
import {TimeSeries} from "../weather/weather.model";

@Pipe({
  name: 'currentWeatherTimeseriesFilter'
})

export class CurrentWeatherTimeseriesFilter implements PipeTransform {
  transform(timeSeries: TimeSeries[], isCurrent: boolean): any {
    return timeSeries.filter((series) => {
      return series.current === isCurrent;
    })
  }
}
