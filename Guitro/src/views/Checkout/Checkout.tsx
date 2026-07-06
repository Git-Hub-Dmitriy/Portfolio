import styles from "./Checkout.module.css";
import { Dictionary } from "@interfaces/dictionary.types";

interface PropsCheckout {
  dict: Dictionary;
}

export default function Checkout(props: PropsCheckout) {
  return <main className={styles.checkout}></main>;
}
