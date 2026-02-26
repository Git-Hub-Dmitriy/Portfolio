export interface DescriptionApi {
  latitude: string;
  longitude: string;
  current: {
    time: string;
    wind_speed_10m: string;
    apparent_temperature: string;
    precipitation: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    weather_code: string;
  };
  daily: {
    time: string[];
    temperature_2m_min: string[];
    temperature_2m_max: string[];
    weather_code: string[];
  };
  hourly: {
    time: string[];
    temperature_2m: string[];
    weather_code: string[];
  };
}

export interface DescriptionApiCity {
  results: [
    {
      id: number;
      name: string;
      latitude: string;
      longitude: string;
      timezone: string;
      population: string;
      country: string;
    },
  ];
}

export interface DescriptionApiCityObject {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  timezone: string;
  population: string;
  country: string;
}
