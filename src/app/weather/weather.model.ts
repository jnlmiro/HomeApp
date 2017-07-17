import {copyObj} from "@angular/animations/browser/src/util";
/**
 * Created by jorgma on 2017-07-09.
 */
export const WEATHER_SYMBOL = {
  1: {'name': {'en':'Clear sky', 'se':'Klart'}, 'imgclass':'clear-sky'},
  2: {'name': {'en':'Nearly clear sky','se': 'Mest klart' }, 'imgclass':'nearly-clear-sky'},
  3: {'name':{'en':'Variable cloudiness', 'se':'Växlande molnighet'}, 'imgclass':'variable-cloudiness'},
  4: {'name':{'en':'Halfclear sky', 'se':'Halvklart'}, 'imgclass':'halfclear-sky'},
  5: {'name':{'en':'Cloudy sky', 'se': 'Mulet'}, 'imgclass':'cloudy-sky'},
  6: {'name': {'en':'Overcast','se':'Mulet'}, 'imgclass':'cloudy-sky'},
  7: {'name':{'en':'Fog', 'se':'Dimmigt'}, 'imgclass':'fog'},
  8: {'name': {'en':'Light rain showers', 'se': 'Lätta regnskurar'}, 'imgclass':'change-of-rain'},
  9: {'name': {'en':'Moderate rain showers','se':'Regnskurar'}, 'imgclass':'change-of-rain'},
  10: {'name': {'en':'Heavy rain showers','se':'Mycket regnskurar'}, 'imgclass':'change-of-rain'},
  11: "Thunderstorm",
  12: "Light sleet showers",
  13: "Moderate sleet showers",
  14: "Heavy sleet showers",
  15: "Light snow showers",
  16: "Moderate snow showers",
  17: "Heavy snow showers",
  18: "Light rain",
  19: "Moderate rain",
  20: "Heavy rain",
  21: "Thunder",
  22: "Light sleet",
  23: "Moderate sleet",
  24: "Heavy sleet",
  25: "Light snowfall",
  26: "Moderate snowfall",
  27: "Heavy snowfall"
};


export const PARAMS = {
  't': 'temperature',
  'pmean': 'meanPrecipitationIntensity',
  'pmax': 'maxPrecipitationIntensity',
  'pmin': 'minPrecipitationIntensity',
  'Wsymb2': 'weatherSymbol'
};

export class WeatherForecast {
  approvedTime: Date;
  referenceTime: Date;
  geometry: Geometry;
  timeSeries: TimeSeries[];
  currentTimeSeries: TimeSeries;

}


export class Geometry {
  type: string;
  coordinates: any;
}

export class TimeSeries {
  validTime: Date;
  current: boolean = false;
  parameters: Parameters;
}

export class Parameters {
  name: string;
  levelType: string;
  level: number;
  unit: string;
  value: number
}
