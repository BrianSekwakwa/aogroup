import { useContext } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import styles from "../../styles/Footer.module.css";
import Layout from "../Layout/Layout";
import exampleContext from "../../context/ExampleStateFolder/exampleContext";
import { Grid } from "@mui/material";

const Footer: NextPage = () => {
  const { counter, increaseCounter, decreaseCounter } =
    useContext(exampleContext);

  const increase = () => {
    const newCount = counter + 1;
    increaseCounter(newCount);
  };

  const decrease = () => {
    const newCount = counter - 1;
    decreaseCounter(newCount);
  };
  return (
    <footer className={styles.footerContainer}>
      <Layout>
        <Grid container className={styles.footerDetails}>
          <Grid item xs={12} sm={8} md={8}>
            <div className={styles.footerDetails__logo}>
              <Image
                src="/images/logo-2.png"
                width={120}
                height={70}
                alt="company logo"
              />
            </div>
            <p className={styles.footerDetails__text}>
              The only digital marketing and software development company who
              would code the extra mile and drink their coffee cold JUST to make
              sure your campaigns are up and running.
            </p>
            <div className={styles.footerDetails__links}>
              <LinkedInIcon fontSize="large" sx={{ color: "white" }} />
              <TwitterIcon fontSize="large" sx={{ color: "white" }} />
              <FacebookIcon fontSize="large" sx={{ color: "white" }} />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            className={styles.footerDetails__counter}
          >
            <div className={styles.footerDetails__counter__display}>
              {counter}
            </div>
            <ButtonGroup variant="contained">
              <Button onClick={increase} color="success">
                Increase
              </Button>
              <Button onClick={decrease}>Decrease</Button>
            </ButtonGroup>
            <p>Context API Counter</p>
          </Grid>
        </Grid>
        <Divider style={{ backgroundColor: "white" }} />
        <div className={styles.footerDetails__copyright}>
          &#169; Copyright 2020 AO Group. All Rights Reserved.
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
