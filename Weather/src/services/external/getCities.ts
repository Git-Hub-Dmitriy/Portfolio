import { DescriptionApiCity } from "@interfaces/descriptionApi";

export default async function getCities(query: string) {
  try {
    const response: Response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=10&language=en&format=json`,
    );
    if (!response.ok) {
      throw new Error("Server Error");
    }
    const json: DescriptionApiCity = await response.json();
    return json;
  } catch (error) {
    console.log("Server Error", error);
  }
}
