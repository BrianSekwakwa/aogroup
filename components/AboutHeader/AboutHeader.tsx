import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";

import styles from "../../styles/AboutHeader.module.css";

function AboutHeader() {
  return (
    <div className={styles.aboutContainer}>
      <Image
        src="/images/cardimages/image6.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className={styles.imageCover}
        alt="business computer"
      />
      <h1 className={styles.aboutTitle}>MARKETING THAT DRIVES SALES</h1>
      <p className={styles.aboutLeadText}>
        We speak marketing fluently. That is why we understand that a business
        cannot exist without its clients. Marketing should help to increase
        demand and sales of your product and service.
      </p>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#ff4400",
          width: "200px",
          height: "50px",
          "&:hover": {
            backgroundColor: "#ff5e23",
          },
        }}
      >
        <Link href="/contact">Contact Us</Link>
      </Button>
    </div>
  );
}

export default AboutHeader;
