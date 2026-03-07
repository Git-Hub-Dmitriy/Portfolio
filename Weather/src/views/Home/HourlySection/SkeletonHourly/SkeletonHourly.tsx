import styles from "./SkeletonHourly.module.css";
import classNames from "classnames";
import IconArrowDown from "@icons/iconArrowDown.svg";

export default function HourlySkeleton() {
  const hours: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <section className={classNames("gridCenter", styles.skeletonHourly)}>
      <div className={styles.skeletonHourly__wrapTitle}>
        <h1 className={styles.skeletonHourly__title}>Hourly forecast</h1>
        <article
          className={classNames("gridCenter", styles.skeletonHourly__wrapper)}
        >
          <div className={styles.skeletonHourly__innerIcon}>
            <h2 className={styles.skeletonHourly__dash}>&ndash;</h2>
            <IconArrowDown className={styles.skeletonHourly__icon} />
          </div>
        </article>
      </div>
      <div className={classNames("gridCenter", styles.skeletonHourly__list)}>
        {hours.map((hour) => (
          <div
            key={hour}
            className={classNames("gridCenter", styles.skeletonHourly__card)}
          ></div>
        ))}
      </div>
    </section>
  );
}
