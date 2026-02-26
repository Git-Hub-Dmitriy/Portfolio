import { ParamsRequest } from "@interfaces/paramsRequest";
import { cacheLife } from "next/cache";

export default async function getWeather(params: ParamsRequest) {
  "use cache";
  cacheLife("hours");
  const url: string = `https://api.open-meteo.com/v1/forecast?latitude=${params.lat}&longitude=${params.long}&daily=temperature_2m_min,temperature_2m_max,weather_code&hourly=temperature_2m,weather_code&current=wind_speed_10m,apparent_temperature,temperature_2m,precipitation,relative_humidity_2m,weather_code&timezone=Europe%2FMoscow&past_days=7&wind_speed_unit=${params.speed}&temperature_unit=${params.temp}&precipitation_unit=${params.precipitation}`;
  try {
    const response: Response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error Server");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Server Error", error);
    return null;
  }
}
