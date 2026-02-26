import * as styles from "./DailySection.module.css";
import classNames from "classnames";
import { DescriptionApi } from "@interfaces/descriptionApi";
import { ParamsRequest } from "@interfaces/paramsRequest";
import toStringDay from "@utils/toStringDay";
import getIconPath from "@utils/getIconPath";
import Image from "next/image";
import getWeather from "@services/external/getWeather";

interface PropsDailySection {
  settings: ParamsRequest;
}
type Daily = {
  id: number;
  day: string;
  minTemp: string;
  maxTemp: string;
  code: string;
};

export default async function DailySection(props: PropsDailySection) {
  const weather: DescriptionApi = await getWeather(props.settings);
  const dateString: string = weather.current.time.replace(/T.*/, "");
  const date: Date = new Date(dateString);
  const sliceDays: Array<string> = weather.daily.time.filter((day) => {
    const time: Date = new Date(day);
    return time.getTime() >= date.getTime() ? day : null;
  });
  const daily: Array<Daily> = sliceDays.map((item, index) => {
    return {
      id: index,
      day: toStringDay(item).slice(0, 3),
      code: weather.daily.weather_code.slice(-7)[index],
      minTemp: weather.daily.temperature_2m_min.slice(-7)[index],
      maxTemp: weather.daily.temperature_2m_max.slice(-7)[index],
    };
  });

  return (
    <section className={classNames("gridCenter", styles.dailySection)}>
      <h1 className={styles.dailySection__title}>Daily forecast</h1>
      <div className={classNames("gridCenter", styles.dailySection__wrapCells)}>
        {daily.map((day) => (
          <div
            key={day.id}
            className={classNames("gridCenter", styles.dailySection__card)}
          >
            <h2 className={styles.dailySection__cardTitle}>{day.day}</h2>
            <Image
              className={styles.dailySection__icon}
              src={getIconPath(day.code)}
              alt="image weather"
              width={40}
              height={40}
              priority={true}
            />
            <div className={styles.dailySection__innerTemp}>
              <h3 className={styles.dailySection__maxTemp}>
                {Math.round(+day.maxTemp)}&deg;
              </h3>
              <h3 className={styles.dailySection__minTemp}>
                {Math.round(+day.minTemp)}&deg;
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
