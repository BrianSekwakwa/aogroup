import type { NextPage } from "next";
import Head from "next/head";
import { Helmet } from "react-helmet";

import styles from "../styles/Home.module.css";
import Navigation from "../components/Navigation/Navigation";
import HomeLanding from "../components/HomeLanding/HomeLanding";
import Footer from "../components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>AO Group</title>
        <meta name="description" content="Helmet application" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Navigation />
      <HomeLanding />
      <Footer />
    </div>
  );
};

export default Home;
