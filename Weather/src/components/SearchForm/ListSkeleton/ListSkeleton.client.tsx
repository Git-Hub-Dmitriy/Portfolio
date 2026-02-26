import * as styles from "./ListSkeleton.module.css";
import classNames from "classnames";

export default function ListSkeleton() {
  return (
    <div className={classNames("gridCenter", styles.listSkeleton)}>
      <div className={styles.listSkeleton__loader}>
        <div className={classNames("gridCenter", styles.listSkeleton__spinner)}>
          <span className={styles.listSkeleton__span}></span>
          <span className={styles.listSkeleton__span}></span>
          <span className={styles.listSkeleton__span}></span>
          <span className={styles.listSkeleton__span}></span>
          <span className={styles.listSkeleton__span}></span>
          <span className={styles.listSkeleton__span}></span>
          <span className={styles.listSkeleton__span}></span>
          <span className={styles.listSkeleton__span}></span>
          <span className={styles.listSkeleton__span}></span>
        </div>
        <span className={styles.listSkeleton__title}>Search in progress</span>
      </div>
    </div>
  );
}
