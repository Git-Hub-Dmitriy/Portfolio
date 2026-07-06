import styles from "./Cart.module.css";
import { Dictionary } from "@interfaces/dictionary.types";

interface PropsCart {
  dict: Dictionary;
}

export default function Cart(props: PropsCart) {
  return <main className={styles.cart}></main>;
}
