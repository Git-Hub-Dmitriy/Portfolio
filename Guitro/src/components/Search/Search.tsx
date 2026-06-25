"use client";
import styles from "./Search.module.css";
import IconSearch from "@icons/iconLoupe.svg";
import { useState } from "react";

export default function Search() {
  const [value, setValue] = useState<string>("");

  return (
    <form className={styles.search}>
      <input
        type="search"
        name="search"
        className={styles.search__input}
        placeholder="Search ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={styles.search__innerIcon}>
        <IconSearch className={styles.search__icon} />
      </div>
    </form>
  );
}
