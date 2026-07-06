import styles from "./Shop.module.css";
import { Dictionary } from "@interfaces/dictionary.types";

interface PropsShop {
  dict: Dictionary;
}

export default function Shop(props: PropsShop) {
  return <main className={styles.shop}></main>;
}
