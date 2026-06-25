import styles from "./Product.module.css";
import { Dictionary } from "@src/interfaces/dictionary.types";

interface PropsProduct {
  dict: Dictionary;
}

export default function Product(props: PropsProduct) {
  return <main className={styles.product}></main>;
}
