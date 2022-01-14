import React from "react";
import type { NextPage } from "next";
import { Helmet } from "react-helmet";

import styles from "../../styles/Contact.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Layout from "../../components/Layout/Layout";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

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
        <Layout>
          <div className={styles.contactDetails}>
            <div className={styles.contactDetails__leftSection}>
              <h1 className={styles.contactDetails__header}>
                {`LET'S GET CONNECTED!`}
              </h1>
              <p className={styles.contactDetails__text}>
                {`The "Contact Us" page should be the most visited page on your
                website. If it is not… You should get in touch with us NOW!`}
              </p>
            </div>
            <div>
              <form className={styles.contactDetails__form}>
                <TextField label="Name" variant="outlined" />
                <TextField label="Email" variant="outlined" />
                <TextField label="Number" variant="outlined" />
                <Button variant="contained" color="success">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </Layout>
      </section>
    </div>
  );
};

export default index;
