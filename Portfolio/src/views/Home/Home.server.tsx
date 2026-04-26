import styles from "./Home.module.css";
import Header from "@components/Header/Header.client";
import About from "./About/About.server";
import RecentWorks from "./RecentWorks/RecentWorks.server";
import Skills from "./Skills/Skills.server";
import Contact from "./Contact/Contact.server";
import BtnScroll from "@components/BtnScroll/BtnScroll.client";
import { Dictionary } from "@interfaces/dictionary.types";
import RevealWrapper from "@providers/RevealWrapper";

interface PropsHome {
  dictionary: Dictionary;
}

export default function Home(props: PropsHome) {
  return (
    <main className={styles.home}>
      <Header stringLinks="components.header.burger.links" />
      <div className={styles.home__innerTitle}>
        <h1 className={styles.home__title_one}>NextJS</h1>
        <h1 className={styles.home__title_two}>Frontend</h1>
        <h1 className={styles.home__title_three}>Developer</h1>
      </div>
      <About dict={props.dictionary} />
      <RecentWorks dict={props.dictionary} />
      <RevealWrapper>
        <Skills dict={props.dictionary} />
      </RevealWrapper>
      <RevealWrapper>
        <Contact dict={props.dictionary} />
      </RevealWrapper>
      <BtnScroll />
    </main>
  );
}
