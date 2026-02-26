import * as styles from "./SkeletonDetails.module.css";
import classNames from "classnames";

export default function DetailsSkeleton() {
  return (
    <section className={classNames("gridCenter", styles.skeletonDetails)}>
      <div className={styles.skeletonDetails__cell}>
        <h2 className={styles.skeletonDetails__title}>Feels Like</h2>
        <h2 className={styles.skeletonDetails__subtitle}>_</h2>
      </div>
      <div className={styles.skeletonDetails__cell}>
        <h2 className={styles.skeletonDetails__title}>Humidity</h2>
        <h2 className={styles.skeletonDetails__subtitle}>_</h2>
      </div>
      <div className={styles.skeletonDetails__cell}>
        <h2 className={styles.skeletonDetails__title}>Wind</h2>
        <h2 className={styles.skeletonDetails__subtitle}>_</h2>
      </div>
      <div className={styles.skeletonDetails__cell}>
        <h2 className={styles.skeletonDetails__title}>Precipitation</h2>
        <h2 className={styles.skeletonDetails__subtitle}>_</h2>
      </div>
    </section>
  );
}
