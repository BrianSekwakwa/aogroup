import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import styles from "../../styles/HomeHeader.module.css";
import Image from "next/image";

function HomeHeader() {
  return (
    <div className={styles.headerContainer}>
      <Image
        src="/images/person.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className={styles.imageCover}
      />
      <h1 className={styles.headerTitle}>Your Trusted Partner In Business.</h1>
      <p className={styles.headerLeadText}>
        Let us help you craft your unique business idea and provide you with
        well thoughout digital solutions
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

export default HomeHeader;
