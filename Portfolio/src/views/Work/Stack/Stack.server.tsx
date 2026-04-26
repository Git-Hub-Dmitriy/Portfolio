import styles from "./Stack.module.css";
import { WorkType } from "@interfaces/dictionary.types";

interface PropsStack {
  work: WorkType | undefined;
}

export default function Stack(props: PropsStack) {
  return (
    <section className={styles.stack}>
      <div className={styles.stack__innerTitle}>
        <div className={styles.stack__circle}></div>
        <h1 id="tech-stack" className={styles.stack__title}>
          {props.work?.stack.title}
        </h1>
      </div>
      <ul className={styles.stack__list}>
        {props.work?.stack.text.map((item, i) => (
          <li key={i} className={styles.stack__text}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
