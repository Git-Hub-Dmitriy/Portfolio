import styles from "./DetailsSection.module.css";
import classNames from "classnames";
import { DescriptionApi } from "@interfaces/descriptionApi";
import { ParamsRequest } from "@interfaces/paramsRequest";
import getWeather from "@services/external/getWeather";

interface PropsDetailsSection {
  settings: ParamsRequest;
}
export default async function DetailsSection(props: PropsDetailsSection) {
  const weather: DescriptionApi = await getWeather(props.settings);

  return (
    <section className={classNames("gridCenter", styles.detailsSection)}>
      <div className={styles.detailsSection__cell}>
        <h2 className={styles.detailsSection__title}>Feels Like</h2>
        <h2 className={styles.detailsSection__subtitle}>
          {Math.round(+weather.current?.apparent_temperature)}&deg;
        </h2>
      </div>
      <div className={styles.detailsSection__cell}>
        <h2 className={styles.detailsSection__title}>Humidity</h2>
        <h2 className={styles.detailsSection__subtitle}>
          {Math.round(+weather.current?.relative_humidity_2m)}%
        </h2>
      </div>
      <div className={styles.detailsSection__cell}>
        <h2 className={styles.detailsSection__title}>Wind</h2>
        <h2 className={styles.detailsSection__subtitle}>
          {`${Math.round(+weather.current?.wind_speed_10m)} ${props.settings.speed}`}
        </h2>
      </div>
      <div className={styles.detailsSection__cell}>
        <h2 className={styles.detailsSection__title}>Precipitation</h2>
        <h2 className={styles.detailsSection__subtitle}>
          {`${Math.round(+weather.current?.precipitation)} ${props.settings.precipitation}`}
        </h2>
      </div>
    </section>
  );
}
