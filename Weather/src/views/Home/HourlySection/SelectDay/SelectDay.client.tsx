"use client";
import { DescriptionApi } from "@interfaces/descriptionApi";
import styles from "./SelectDay.module.css";
import toStringDay from "@utils/toStringDay";
import { useState, useEffect } from "react";
import IconArrowDown from "@icons/iconArrowDown.svg";
import classNames from "classnames";
import storeSelectedDay from "@store/storeSelectedDay";

interface PropsSelectDay {
  data: DescriptionApi;
}

export default function SelectDay(props: PropsSelectDay) {
  const { selectedDay, setSelectedDay } = storeSelectedDay();
  const [activeList, setActiveList] = useState<boolean>(false);
  const currentDayWeek: string = toStringDay(props.data.current.time);

  useEffect(() => {
    setSelectedDay(currentDayWeek);
  }, [currentDayWeek, setSelectedDay]);

  const days: Array<string> = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <article
      tabIndex={1}
      onBlur={() => setActiveList(false)}
      className={classNames("gridCenter", styles.selectDay)}
    >
      <div
        onClick={() => setActiveList(!activeList)}
        className={styles.selectDay__innerTitle}
      >
        <h2 className={styles.selectDay__title}>{selectedDay}</h2>
        <IconArrowDown
          className={classNames(
            styles.selectDay__icon,
            activeList && styles.selectDay__icon_active,
          )}
        />
      </div>
      <div
        className={classNames(
          styles.selectDay__listDays,
          activeList && styles.selectDay__listDays_active,
        )}
      >
        {days.map((day) => (
          <h2
            onClick={() => {
              setActiveList(false);
              setSelectedDay(day);
            }}
            key={day}
            className={styles.selectDay__day}
          >
            {day}
          </h2>
        ))}
      </div>
    </article>
  );
}
