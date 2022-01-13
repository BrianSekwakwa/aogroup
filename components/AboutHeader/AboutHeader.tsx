import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Layout from "../Layout/Layout";
import styles from "../../styles/AboutHeader.module.css";

function AboutHeader() {
  return (
    <div className={styles.aboutContainer}>
      <div>
        <h1 className={styles.aboutTitle}>MARKETING THAT DRIVES SALES</h1>
        <p className={styles.aboutLeadText}>
          We speak marketing fluently. That’s why we understand that a business
          cannot exist without its clients. Marketing should help to increase
          demand and sales of your product and service.
        </p>
        <Button className={styles.aboutButton} variant="contained">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}

export default AboutHeader;
