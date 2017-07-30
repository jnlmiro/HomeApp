/**
 * Created by jorgma on 2017-07-25.
 */
export class ForecastChartData {
  forecastChartPrecipitationData: ForecastChartPrecipitationData;
  forecastChartTemperatureData: ForecastChartTemperatureData;

}

export class ForecastChartDataSeries {
  label: string;
  data: Array<number> = [];
  labels: Array<number> = [];
  yAxisID: string;

  public toChartDataSet() {
    let dataset: any = {data: this.data, label: this.label};
    if (this.yAxisID) {
      dataset['yAxisID'] = this.yAxisID;
    }

    console.log('toChartDataSet', dataset);
    return dataset;

  }
}

export class ForecastChartPrecipitationData extends ForecastChartDataSeries {
  label = 'Nederbörd';
  yAxisID = 'y-axis-1';

}

export class ForecastChartTemperatureData extends ForecastChartDataSeries {
  label = 'Temperatur';
  yAxisID = 'y-axis-0';
}

