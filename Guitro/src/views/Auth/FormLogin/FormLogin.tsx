"use client";
import styles from "./FormLogin.module.css";
import { Dictionary } from "@interfaces/dictionary.types";
import IconWarning from "@icons/icon-warning.svg";
import IconEye from "@icons/iconEyePassword.svg";
import Link from "next/link";
import { useState } from "react";

interface PropsFormLogin {
  dict: Dictionary;
}

export default function FormLogin(props: PropsFormLogin) {
  const [showPass, setShowPass] = useState<boolean>(false);

  return (
    <form className={styles.login}>
      <article className={styles.login__response}>
        <IconWarning className={styles.login__iconError} />
        <h2 className={styles.login__text}>
          <b>Error</b>
          {""}
        </h2>
      </article>
      <div className={styles.login__wrapper}>
        <h1 className={styles.login__title}>
          {props.dict.pages.auth.login.title}
        </h1>
        <div className={styles.login__innerData}>
          <div className={styles.login__innerInput}>
            <h2 className={styles.login__subtitle}>
              {props.dict.pages.auth.login.email}
            </h2>
            <input
              autoComplete="off"
              className={styles.login__input}
              required
              type="email"
              name="email"
            />
          </div>
          <div className={styles.login__innerInput}>
            <h2 className={styles.login__subtitle}>
              {props.dict.pages.auth.login.password}
            </h2>
            <div className={styles.login__innerPassword}>
              <input
                autoComplete="off"
                required
                className={styles.login__input}
                type={showPass ? "text" : "password"}
                name="password"
              />
              <IconEye
                fill={showPass ? "#cfc7c7" : "#9e9c9c"}
                onClick={() => setShowPass(!showPass)}
                className={styles.login__iconEye}
              />
            </div>
          </div>
          <div className={styles.login__wrapBtn}>
            <div className={styles.login__innerRemember}>
              <input
                className={styles.login__checkbox}
                type="checkbox"
                name="checkbox"
              />
              <h3 className={styles.login__subtitle}>
                {props.dict.pages.auth.login.remember}
              </h3>
            </div>
            <button className={styles.login__btnLogin}>
              {props.dict.pages.auth.login.btn}
            </button>
          </div>
          <Link className={styles.login__lostPass} href={"lost-password"}>
            {props.dict.pages.auth.login.lostPass}
          </Link>
        </div>
      </div>
    </form>
  );
}
