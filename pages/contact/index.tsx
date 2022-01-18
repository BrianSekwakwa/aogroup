import React from "react";
import type { NextPage } from "next";
import { Helmet } from "react-helmet";

import styles from "../../styles/Contact.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Layout from "../../components/Layout/Layout";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import Image from "next/image";

const index: NextPage = () => {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Helmet application" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Navigation />
      <section className={styles.contactContainer}>
        <Image
          src="/images/contact.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className={styles.imageCover}
        />
        <Layout>
          <Grid container spacing={3} className={styles.contactDetails}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              className={styles.contactDetails__leftSection}
            >
              <h1 className={styles.contactDetails__header}>
                {`LET'S GET CONNECTED!`}
              </h1>
              <p className={styles.contactDetails__text}>
                {`The "Contact Us" page should be the most visited page on your
                website. If it is not… You should get in touch with us NOW!`}
              </p>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <form className={styles.contactDetails__form}>
                <TextField label="Name" variant="outlined" />
                <TextField label="Email" variant="outlined" />
                <TextField label="Number" variant="outlined" />
                <Button variant="contained" color="success">
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </Layout>
      </section>
    </div>
  );
};

export default index;
