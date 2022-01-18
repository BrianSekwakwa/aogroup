import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Layout from "../Layout/Layout";
import styles from "../../styles/Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <div className={styles.navigation}>
        <Layout>
          <div className={styles.navigationBar}>
            <span className={styles.navigationLogo}>
              <Image
                src="/images/logo-2.png"
                width={70}
                height={40}
                alt="company logo"
              />
            </span>
            <ul className={styles.navigationLinks}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <div className={styles.navigationMenuIcon}>
              <IconButton
                size="large"
                edge="start"
                color="secondary"
                aria-label="menu"
                sx={{ mr: 2, color: "#fff" }}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </div>
        </Layout>
      </div>
    </nav>
  );
}
