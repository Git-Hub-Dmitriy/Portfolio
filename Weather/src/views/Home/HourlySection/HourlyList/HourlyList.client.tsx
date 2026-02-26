"use client";
import * as styles from "./HourlyList.module.css";
import { DescriptionApi } from "@interfaces/descriptionApi";
import classNames from "classnames";
import storeSelectedDay from "@store/storeSelectedDay";
import toStringDay from "@utils/toStringDay";
import Image from "next/image";
import getIconPath from "@utils/getIconPath";
import timeTo12Pm from "@utils/timeTo12Pm";
import { useMemo, memo } from "react";

interface PropsHourlyList {
  data: DescriptionApi;
}

function HourlyList(props: PropsHourlyList) {
  const { selectedDay } = storeSelectedDay();

  const processedHours = useMemo(() => {
    const days: string[] = props.data.hourly.time.filter((day) => {
      const date: number = new Date(day.replace(/T.*/, "")).getTime();
      const date2: number = new Date(
        props.data.daily.time.slice(-7)[0],
      ).getTime();
      return date >= date2 ? day : null;
    });

    const hours: string[] = days.filter(
      (hour) =>
        new Date(hour).getHours() >= 15 && new Date(hour).getHours() <= 22,
    );

    const hoursForDay: string[] = hours.filter((hour) =>
      selectedDay.includes(toStringDay(hour)) ? hour : null,
    );

    const indexHours: number[] = hoursForDay.map((hour) =>
      props.data.hourly.time.includes(hour)
        ? props.data.hourly.time.indexOf(hour)
        : 0,
    );

    const codesHours: string[] = indexHours.map(
      (i) => props.data.hourly.weather_code[i],
    );
    const tempForDay: string[] = indexHours.map(
      (i) => props.data.hourly.temperature_2m[i],
    );
    return hoursForDay.map((item, i) => {
      return {
        id: i,
        code: codesHours[i],
        temp: tempForDay[i],
        hour: new Date(item).getHours(),
      };
    });
  }, [selectedDay, props.data]);

  return (
    <div className={classNames("gridCenter", styles.hourlyList)}>
      {processedHours.map((hour) => (
        <div
          key={hour.id}
          className={classNames("gridCenter", styles.hourlyList__card)}
        >
          <div className={styles.hourlyList__innerImg}>
            <Image
              className={styles.hourlyList__icon}
              src={getIconPath(hour.code)}
              alt="icon weather"
              width={40}
              height={40}
            />
            <h2 className={styles.hourlyList__subtitle}>
              {timeTo12Pm(hour.hour)} PM
            </h2>
          </div>
          <h2 className={styles.hourlyList__temp}>
            {Math.round(+hour.temp)}&deg;
          </h2>
        </div>
      ))}
    </div>
  );
}

export default memo(HourlyList);
