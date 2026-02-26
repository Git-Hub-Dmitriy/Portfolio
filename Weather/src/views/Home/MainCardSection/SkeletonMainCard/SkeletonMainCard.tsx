import classNames from "classnames";
import * as styles from "./SkeletonMainCard.module.css";

export default function MainCardSkeleton() {
  return (
    <section className={classNames("gridCenter", styles.skeletonMainCard)}>
      <div
        className={classNames("gridCenter", styles.skeletonMainCard__loader)}
      >
        <div className={styles.skeletonMainCard__spin}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1 className={styles.skeletonMainCard__title}>Loading...</h1>
      </div>
    </section>
  );
}
