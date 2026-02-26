"use client";
import * as styles from "./Metric.module.css";
import classNames from "classnames";
import IconMark from "@icons/iconMark.svg";

interface PropsMetric {
  title: string;
  subtitle: { one: string; two: string };
  paramTemp: { one: string | null; two: string | null };
  paramSpeed: { one: string | null; two: string | null };
  paramPrecip: { one: string | null; two: string | null };
  state: string | null;
  handleSetParams: (
    temp: string | null,
    speed: string | null,
    precip: string | null,
  ) => void;
  metric: {
    one: string;
    two: string;
  };
}

export default function Metric(props: PropsMetric) {
  return (
    <div className={classNames("gridCenter", styles.metric)}>
      <h3 className={styles.metric__title}>{props.title}</h3>
      <div className={styles.metric__innerMetric}>
        <div
          onClick={() =>
            props.handleSetParams(
              props.paramTemp.one,
              props.paramSpeed.one,
              props.paramPrecip.one,
            )
          }
          className={classNames("gridCenter", styles.metric__innerSubtitle)}
        >
          <h3 className={styles.metric__subtitle}>
            {props.subtitle.one} {props.metric.one}
          </h3>
          <IconMark
            className={classNames(
              styles.metric__iconMark,
              props.state && styles.metric__iconMark_hide,
            )}
          />
        </div>
        <div
          onClick={() =>
            props.handleSetParams(
              props.paramTemp.two,
              props.paramSpeed.two,
              props.paramPrecip.two,
            )
          }
          className={classNames("gridCenter", styles.metric__innerSubtitle)}
        >
          <h3 className={styles.metric__subtitle}>
            {props.subtitle.two} {props.metric.two}
          </h3>
          <IconMark
            className={classNames(
              styles.metric__iconMark,
              props.state || styles.metric__iconMark_hide,
            )}
          />
        </div>
      </div>
    </div>
  );
}
