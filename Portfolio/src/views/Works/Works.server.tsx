import styles from "./Works.module.css";
import { Dictionary } from "@interfaces/dictionary.types";
import Header from "@components/Header/Header.client";
import Post from "./Post/Post.server";
import BtnScroll from "@components/BtnScroll/BtnScroll.client";

interface PropsWorks {
  dict: Dictionary;
}

export default function Works(props: PropsWorks) {
  return (
    <main className={styles.works}>
      <Header stringLinks="components.header.burger.linksWorks" />
      <h1 className={styles.works__title}>My Works</h1>
      <Post dict={props.dict} />
      <BtnScroll />
    </main>
  );
}
