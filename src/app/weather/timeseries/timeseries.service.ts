/**
 * Created by jorgma on 2017-07-25.
 */
import {Injectable} from '@angular/core';
import {WeatherForecast} from "../weather.model";
import {
  ForecastChartPrecipitationData, ForecastChartTemperatureData,
  ForecastChartData
} from "./timeseries.chart.data.model";

@Injectable()
export class TimeSeriesService {

  constructor() {
  }


  public prepareForecastChartDataSeries(weatherForecast:WeatherForecast):ForecastChartData {
    let forecastChartPrecipitationData = new ForecastChartPrecipitationData();
    let forecastChartTemperatureData = new ForecastChartTemperatureData();

    for(let i = 0; i < weatherForecast.timeSeries.length; i++) {
      forecastChartPrecipitationData.data.push(weatherForecast.timeSeries[i].parameters['pmean'].value);
      forecastChartPrecipitationData.labels.push(weatherForecast.timeSeries[i].hour);

      forecastChartTemperatureData.data.push(weatherForecast.timeSeries[i].parameters['t'].value);
      forecastChartTemperatureData.labels.push(weatherForecast.timeSeries[i].hour);
    }

    let forecastChartData = new ForecastChartData();
    forecastChartData.forecastChartPrecipitationData = forecastChartPrecipitationData;
    forecastChartData.forecastChartTemperatureData = forecastChartTemperatureData;
    return forecastChartData;
  }

}
