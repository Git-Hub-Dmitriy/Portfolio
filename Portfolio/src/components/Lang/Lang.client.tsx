"use client";
import styles from "./Lang.module.css";
import classNames from "classnames";
import changeLocale from "@utils/changeLocale";
import { usePathname, useRouter } from "next/navigation";
import storeSelectedLang from "@store/storeSelectLang";

interface PropsLang {
  showLang: boolean;
  setShowLang: (state: boolean) => void;
  setShowLink: (state: boolean) => void;
}

export default function Lang(props: PropsLang) {
  const pathname = usePathname();
  const router = useRouter();
  const { language, setLanguage } = storeSelectedLang();

  return (
    <article
      tabIndex={0}
      onBlur={() => props.setShowLang(false)}
      onClick={() => {
        props.setShowLang(!props.showLang);
        props.setShowLink(false);
      }}
      className={styles.lang}
    >
      {language}
      <ul
        className={classNames(
          styles.lang__list,
          props.showLang && styles.lang__list_active,
        )}
      >
        <li
          onClick={() => {
            props.setShowLang(false);
            changeLocale("en", pathname, router);
            setLanguage("EN");
          }}
          className={styles.lang__title}
        >
          EN
        </li>
        <li
          onClick={() => {
            props.setShowLang(false);
            changeLocale("ua", pathname, router);
            setLanguage("UA");
          }}
          className={styles.lang__title}
        >
          UA
        </li>
      </ul>
    </article>
  );
}
