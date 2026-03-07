import styles from "./HourlySection.module.css";
import { DescriptionApi } from "@interfaces/descriptionApi";
import { ParamsRequest } from "@interfaces/paramsRequest";
import getWeather from "@services/external/getWeather";
import classNames from "classnames";
import dynamic from "next/dynamic";
const HourlyList = dynamic(
  () => import("@views/Home/HourlySection/HourlyList/HourlyList.client"),
);
const SelectDay = dynamic(
  () => import("@views/Home/HourlySection/SelectDay/SelectDay.client"),
);

interface PropsHourly {
  settings: ParamsRequest;
}

export default async function HourlySection(props: PropsHourly) {
  const weather: DescriptionApi = await getWeather(props.settings);

  return (
    <section className={classNames("gridCenter", styles.hourly)}>
      <div className={styles.hourly__innerTitle}>
        <h1 className={styles.hourly__title}>Hourly forecast</h1>
        <SelectDay data={weather} />
      </div>
      <HourlyList data={weather} />
    </section>
  );
}
