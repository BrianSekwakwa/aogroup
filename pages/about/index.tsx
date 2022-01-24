import React from "react";
import type { NextPage } from "next";
import { Helmet } from "react-helmet";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

import Layout from "../../components/Layout/Layout";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import AboutHeader from "../../components/AboutHeader/AboutHeader";
import styles from "../../styles/About.module.css";
import ImageCard from "../../components/ImageCard/ImageCard";

const index: NextPage = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Helmet application" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Navigation />
      <AboutHeader />

      {/* About Us Details */}
      <section>
        <Layout>
          <div className={styles.aboutContainer}>
            <h1 className={styles.aboutDetails__header}>
              A little bit about our journey...
            </h1>
            <Grid container spacing={3} className={styles.aboutDetails__text}>
              <Grid item xs={12} sm={6} md={6}>
                <p>
                  Established 5 years ago. AO is proud to call South Africa
                  home, but also thankful for our ability to serve customers
                  globally in over 14 different countries. We also have offices
                  in Mauritius and Kenya which gives us a wealth of knowledge
                  and a competitive edge about understanding different markets.
                  <br />
                  <br />
                  Our vision is to solve business problems, especially with
                  SMMEs and in the financial services sector. We see ourselves
                  as an extension of your team and when working with us you get
                  a dedicated account manager and access to a team of experts in
                  all available fields.
                </p>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <p>
                  We are passionate about technology. The type of obsession that
                  makes you crave more, want to do better, and get the best out
                  of a new feature, design, or software. We aim to help build
                  companies and brands that will be remembered - for the right
                  reasons! Whether we use our strategy, building new software or
                  marketing a business using technology.
                  <br />
                  <br />
                  We are the company that other companies call when they are in
                  a tight spot.
                  <br />
                  <br />
                  <strong>SO, THIS IS US. HELLO, FROM ALL OF US AT AO.</strong>
                </p>
              </Grid>
            </Grid>
          </div>
        </Layout>
      </section>

      {/* The Team*/}
      <section>
        <Layout>
          <div className={styles.membersContainer}>
            <h1 className={styles.membersHeader}>Meet The Team.</h1>
            <Grid container spacing={4} className={styles.membersCardContainer}>
              <Grid item>
                <ImageCard
                  options={{
                    imagePath: "/images/cardimages/image1.jpg",
                    title: "Pieter Du Toit",
                    paragraph:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis erat, posuere eget rhoncus eu, feugiat a ipsum. Duis sollicitudin ante sed tortor rhoncus, a suscipit quam porta",
                  }}
                />
              </Grid>
              <Grid item>
                <ImageCard
                  options={{
                    imagePath: "/images/cardimages/image1.jpg",
                    title: "Roelof Peens",
                    paragraph:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis erat, posuere eget rhoncus eu, feugiat a ipsum. Duis sollicitudin ante sed tortor rhoncus, a suscipit quam porta",
                  }}
                />
              </Grid>
              <Grid item>
                <ImageCard
                  options={{
                    imagePath: "/images/cardimages/image1.jpg",
                    title: "Adel Robertson",
                    paragraph:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis erat, posuere eget rhoncus eu, feugiat a ipsum. Duis sollicitudin ante sed tortor rhoncus, a suscipit quam porta",
                  }}
                />
              </Grid>
              <Grid item>
                <ImageCard
                  options={{
                    imagePath: "/images/cardimages/image1.jpg",
                    title: "Paul Von Zeuner",
                    paragraph:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis erat, posuere eget rhoncus eu, feugiat a ipsum. Duis sollicitudin ante sed tortor rhoncus, a suscipit quam porta",
                  }}
                />
              </Grid>
              <Grid item>
                <ImageCard
                  options={{
                    imagePath: "/images/cardimages/image1.jpg",
                    title: "Aniska Berry",
                    paragraph:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis erat, posuere eget rhoncus eu, feugiat a ipsum. Duis sollicitudin ante sed tortor rhoncus, a suscipit quam porta",
                  }}
                />
              </Grid>
              <Grid item>
                <ImageCard
                  options={{
                    imagePath: "/images/cardimages/image1.jpg",
                    title: "Nishara Singh",
                    paragraph:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis erat, posuere eget rhoncus eu, feugiat a ipsum. Duis sollicitudin ante sed tortor rhoncus, a suscipit quam porta",
                  }}
                />
              </Grid>
            </Grid>
          </div>
        </Layout>
      </section>
      {/* Animation Test */}
      <section>
        <Layout>
          <div className={styles.exampleContainer}>
            <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </div>
        </Layout>
      </section>

      <Footer />
    </div>
  );
};

export default index;
