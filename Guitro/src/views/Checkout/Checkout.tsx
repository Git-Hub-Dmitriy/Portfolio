import styles from "./Checkout.module.css";
import { Dictionary } from "@src/interfaces/dictionary.types";

interface PropsCheckout {
  dict: Dictionary;
}

export default function Checkout(props: PropsCheckout) {
  return <main className={styles.checkout}></main>;
}
