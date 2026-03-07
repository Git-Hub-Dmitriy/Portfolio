import styles from "./SkeletonDaily.module.css";
import classNames from "classnames";

export default function DailySkeleton() {
  const array: number[] = [1, 2, 3, 4, 5, 6, 7];
  return (
    <section className={classNames("gridCenter", styles.skeletonDaily)}>
      <h1 className={styles.skeletonDaily__title}>Daily forecast</h1>
      <div
        className={classNames("gridCenter", styles.skeletonDaily__wrapCells)}
      >
        {array.map((day) => (
          <div key={day} className={styles.skeletonDaily__card}></div>
        ))}
      </div>
    </section>
  );
}
