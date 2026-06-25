import styles from "./Features.module.css";
import { Dictionary } from "@interfaces/dictionary.types";

interface PorpsFeatures {
  dictionary: Dictionary;
}

export default function Features(props: PorpsFeatures) {
  return (
    <section className={styles.features}>
      {props.dictionary.pages.home.features.map((item, index) => (
        <h2 key={index} className={styles.features__title}>
          {item}
        </h2>
      ))}
    </section>
  );
}
