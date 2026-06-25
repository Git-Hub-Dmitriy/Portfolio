import styles from "./Home.module.css";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import { Dictionary } from "@interfaces/dictionary.types";
import OurProducts from "./OurProducts/OurProducts";

interface PropsHome {
  dict: Dictionary;
}

export default function Home(props: PropsHome) {
  return (
    <main className={styles.home}>
      <Banner />
      <Features dictionary={props.dict} />
      <OurProducts dict={props.dict} />
    </main>
  );
}
