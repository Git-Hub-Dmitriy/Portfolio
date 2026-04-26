import styles from "./Features.module.css";
import { WorkType } from "@interfaces/dictionary.types";

interface PropsFeatures {
  work: WorkType | undefined;
}

export default function Features(props: PropsFeatures) {
  return (
    <section className={styles.features}>
      <div className={styles.features__innerTitle}>
        <div className={styles.features__circle}></div>
        <h1 id="features" className={styles.features__title}>
          {props.work?.features.title}
        </h1>
      </div>
      <ul className={styles.features__list}>
        {props.work?.features.text.map((item, i) => (
          <li className={styles.features__text} key={i}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
