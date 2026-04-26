"use client";
import { useState } from "react";
import styles from "./Header.module.css";
import { useTranslation } from "@providers/translation-provider";
import Link from "next/link";
import dynamic from "next/dynamic";

const Burger = dynamic(() => import("./Burger/Burger.client"));
const Lang = dynamic(() => import("@components/Lang/Lang.client"));
interface PropsHeader {
  stringLinks: string;
}

export default function Header(props: PropsHeader) {
  const [showModal, setShowModal] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <Link href="/">
        <h1 className={styles.header__title}>{t("components.header.title")}</h1>
      </Link>
      <div className={styles.header__container}>
        <Lang
          showLang={showLang}
          setShowLang={setShowLang}
          setShowLink={setShowModal}
        />
        <Burger
          stringLinks={props.stringLinks}
          showModal={showModal}
          setShowModal={setShowModal}
          setShowLang={setShowLang}
        />
      </div>
    </header>
  );
}
