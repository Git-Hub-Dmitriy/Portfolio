import styles from "./Bestseller.module.css";
import { Dictionary } from "@interfaces/dictionary.types";

interface PropsBestseller {
  dict: Dictionary;
}

export default function Bestseller(props: PropsBestseller) {
  return (
    <div className={styles.bestseller}>
      {props.dict.pages.home.ourProduct.bestseller.map((item) => (
        <div
          style={{ backgroundImage: `url(${item.url})` }}
          className={styles.bestseller__item}
          key={item.id}
        >
          <h2 className={styles.bestseller__title}>{item.title}</h2>
          <h2 className={styles.bestseller__subtitle}>{item.text}</h2>
        </div>
      ))}
    </div>
  );
}
