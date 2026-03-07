import { DescriptionApi } from "@interfaces/descriptionApi";
import { ParamsRequest } from "@interfaces/paramsRequest";
import styles from "./MainCardSection.module.css";
import toStringMonth from "@utils/toStringMonth";
import toStringDay from "@utils/toStringDay";
import getIconPath from "@utils/getIconPath";
import getWeather from "@services/external/getWeather";
import Image from "next/image";
import classNames from "classnames";

interface propsWeatherCity {
  settings: ParamsRequest;
}

export default async function WeatherCity(props: propsWeatherCity) {
  const weather: DescriptionApi = await getWeather(props.settings);
  const currentMonth: string = toStringMonth(weather.current.time);
  const currentDay: string = toStringDay(weather.current.time);
  const currentDate: Date = new Date(weather.current.time);
  const imageWeather: string = getIconPath(weather.current.weather_code);

  return (
    <section className={styles.mainCard}>
      <div className={classNames("gridCenter", styles.mainCard__wrapTitle)}>
        <h1
          className={styles.mainCard__title}
        >{`${props.settings.city}, ${props.settings.country}`}</h1>
        <h2
          className={styles.mainCard__subtitle}
        >{`${currentDay}, ${currentMonth} ${currentDate.getDate()}, ${currentDate.getFullYear()}`}</h2>
      </div>
      <div className={styles.mainCard__innerTemp}>
        <Image
          src={imageWeather}
          width={60}
          height={60}
          alt="icon weather"
          priority={true}
          className={styles.mainCard__iconWeather}
        />
        <h2 className={styles.mainCard__temp}>
          {Math.trunc(+weather.current.temperature_2m)}
          <span>&deg;</span>
        </h2>
      </div>
    </section>
  );
}
