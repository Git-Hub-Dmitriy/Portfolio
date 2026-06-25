import styles from "./OurProducts.module.css";
import { Dictionary } from "@interfaces/dictionary.types";
import Bestseller from "./Bestseller/Bestseller";

interface PropsOurProducts {
  dict: Dictionary;
}

export default function OurProducts(props: PropsOurProducts) {
  return (
    <section className={styles.ourProducts}>
      <Bestseller dict={props.dict} />
    </section>
  );
}
