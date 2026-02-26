import * as styles from "./Logo.module.css";
import IconLogo from "@icons/Logo.svg";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <IconLogo className={styles.logo__icon} />
      <h3 className={styles.logo__title}>Weather Now</h3>
    </div>
  );
}
