/**
 * Created by jorgma on 2017-07-09.
 */
export const WEATHER_SYMBOL = {
  1: {'name': {'en':'Clear sky', 'se':'Klart'}, 'imgclass':'clear-sky'},
  2: {'name': {'en':'Nearly clear sky','se': 'Mest klart' }, 'imgclass':'nearly-clear-sky'},
  3: {'name':{'en':'Variable cloudiness', 'se':'Växlande molnighet'}, 'imgclass':'variable-cloudiness'},
  4: {'name':{'en':'Halfclear sky', 'se':'Halvklart'}, 'imgclass':'halfclear-sky'},
  5: {'name':{'en':'Cloudy sky', 'se': 'Molnigt'}, 'imgclass':'cloudy-sky'},
  6: {'name': {'en':'Overcast','se':'Mulet'}, 'imgclass':'cloudy-sky'},
  7: {'name':{'en':'Fog', 'se':'Dimmigt'}, 'imgclass':'fog'},
  8: {'name': {'en':'Light rain showers', 'se': 'Lätta regnskurar'}, 'imgclass':'chance-of-rain'},
  9: {'name': {'en':'Moderate rain showers','se':'Regnskurar'}, 'imgclass':'chance-of-rain'},
  10: {'name': {'en':'Heavy rain showers','se':'Mycket regnskurar'}, 'imgclass':'chance-of-rain'},
  11: {'name': {'en':'Thunderstorm','se':'Åskskurar'}, 'imgclass':'thunderstorm'},
  12: {'name': {'en':'Light sleet showers','se':'Byar av snöblandat regn'}, 'imgclass':'chancesleet'},
  13: {'name': {'en':'Moderate sleet showers','se':'Byar av snöblandat regn'}, 'imgclass':'chancesleet'},
  14: {'name': {'en':'Heavy sleet showers','se':'Byar av snöblandat regn'}, 'imgclass':'chancesleet'},
  15: {'name': {'en':'Light snow showers','se':'Snöbyar'}, 'imgclass':'chancesnow'},
  16: {'name': {'en':'Moderate snow showers','se':'Snöbyar'}, 'imgclass':'chancesnow'},
  17: {'name': {'en':'Heavy snow showers','se':'Snöbyar'}, 'imgclass':'chancesnow'},
  18: {'name': {'en':'Light rain', 'se':'Lätt regn'}, 'imgclass':'rain'},
  19: {'name': {'en':'Moderate rain', 'se':'Regn'}, 'imgclass':'rain'},
  20: {'name': {'en':'Heavy rain', 'se':'Mycket Regn'}, 'imgclass':'rain'},
  21: {'name': {'en':'Thunder','se':'Åska'}, 'imgclass':'Thunder'},
  22: {'name': {'en':'Light sleet', 'se':'Lätt snöblandat'}, 'imgclass':'sleet'},
  23: {'name': {'en':'Moderate sleet', 'se':'Snöblandat'}, 'imgclass':'sleet'},
  24: {'name': {'en':'Heavy sleet', 'se':'Mycket snöblandat'}, 'imgclass':'sleet'},
  25: {'name': {'en':'Light snowfall', 'se':'Lätt snöfall'}, 'imgclass':'snow'},
  26: {'name': {'en':'Moderate snowfall', 'se':'Snöfall'}, 'imgclass':'snow'},
  27: {'name': {'en':'Heavy snowfall', 'se':'Mycket snöfall'}, 'imgclass':'snow'}
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
  validTime: string;
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
