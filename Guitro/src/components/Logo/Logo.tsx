import styles from "./Logo.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href={"/"} className={styles.logo}>
      <Image
        className={styles.logo__image}
        src={"/images/logo.webp"}
        alt="Logo"
        width={180}
        height={60}
        priority
      />
    </Link>
  );
}
