"use client";
import * as styles from "./Settings.module.css";
import IconsSettings from "@icons/iconSettings.svg";
import IconArrowDown from "@icons/iconArrowDown.svg";
import classNames from "classnames";
import dynamic from "next/dynamic";
import { useState } from "react";

const Menu = dynamic(() => import("@components/Settings/Menu/Menu.client"), {
  ssr: false,
});

export default function Settings() {
  const [activeMenu, setAvtiveMenu] = useState<boolean>(false);

  return (
    <article
      tabIndex={2}
      onBlur={() => setAvtiveMenu(false)}
      className={styles.settings}
    >
      <div
        onClick={() => setAvtiveMenu(!activeMenu)}
        className={styles.settings__wrapper}
      >
        <IconsSettings className={styles.settings__iconSettings} />
        <div className={classNames("gridCenter", styles.settings__innerText)}>
          <h3 className={styles.settings__text}>Units</h3>
          <IconArrowDown
            className={classNames(
              styles.settings__iconArrowDown,
              activeMenu && styles.settings__iconArrowDown_active,
            )}
          />
        </div>
      </div>
      <Menu display={activeMenu} />
    </article>
  );
}
