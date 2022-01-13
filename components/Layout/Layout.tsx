import React from "react";
import styles from "../../styles/Layout.module.css";

function Layout({ children }: any) {
  return <div className={styles.container}>{children}</div>;
}

export default Layout;
