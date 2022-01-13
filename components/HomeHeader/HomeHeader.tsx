import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Layout from "../Layout/Layout";
import styles from "../../styles/HomeHeader.module.css";

function HomeHeader() {
  return (
    <div className={styles.headerContainer}>
      <div>
        <h1 className={styles.headerTitle}>
          Your Trusted Partner In Business.
        </h1>
        <p className={styles.headerLeadText}>
          Let us help you craft your unique business idea and provide you with
          well thoughout digital solutions
        </p>
        <Button className={styles.headerButton} variant="contained">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}

export default HomeHeader;
