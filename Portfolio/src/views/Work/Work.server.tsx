import styles from "./Work.module.css";
import { Dictionary } from "@interfaces/dictionary.types";
import Overview from "./Overview/Overview.server";
import Features from "./Features/Features.server";
import Stack from "./Stack/Stack.server";
import Header from "@components/Header/Header.client";
import BtnScroll from "@components/BtnScroll/BtnScroll.client";
import RevealWrapper from "@providers/RevealWrapper";

interface PropsWork {
  dict: Dictionary;
  segment: string;
}

export default function Work(props: PropsWork) {
  const work = props.dict.pages.work.find((item) => item.id === +props.segment);

  return (
    <main className={styles.work}>
      <Header stringLinks="components.header.burger.linksWork" />
      <h1 className={styles.work__name}>{work?.name}</h1>
      <RevealWrapper>
        <Overview work={work} />
      </RevealWrapper>
      <RevealWrapper>
        <Features work={work} />
      </RevealWrapper>
      <RevealWrapper>
        <Stack work={work} />
      </RevealWrapper>
      <BtnScroll />
    </main>
  );
}
