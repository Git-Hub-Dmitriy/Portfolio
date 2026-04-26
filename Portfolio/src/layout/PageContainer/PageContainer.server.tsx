import styles from "./PageContainer.module.css";
import React from "react";

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.pageContainer}>{children}</div>;
}
