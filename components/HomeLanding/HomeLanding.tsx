import Image from "next/image";

import HomeHeader from "../HomeHeader/HomeHeader";
import Layout from "../Layout/Layout";
import styles from "../../styles/HomeLanding.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Grid } from "@mui/material";
import Testimonials from "../Testimonials/Testimonials";

function HomeLanding() {
  return (
    <div>
      {/* Home Header */}
      <HomeHeader />
      {/* Elevate your business section */}
      <section>
        <Layout>
          <Grid container className={styles.gridContainer}>
            <Grid item xs={12} md={6} className={styles.detailsContainer}>
              <h1>We Can Help You Elevate Your Business</h1>
              <p>
                What does your business need to succeed? We have all the tips,
                tricks and technology up our sleeve to make your clients think
                you are the best at what you do. With every marketing effort, we
                keep this in mind. SEO, social media, paid media advertising and
                content creation are all ways to ensure your brand has a message
                that reaches the ideal target audience at the right time. Our
                aim is to create a sales spike, while we build your brand on a
                rock-solid foundation.
              </p>
            </Grid>
            <Grid item xs={12} md={6} className={styles.imageContainer}>
              <Image
                src="/images/mountain_edit_02.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="Mountain Peak"
              />
            </Grid>
          </Grid>
        </Layout>
      </section>
      {/* Part of the team section */}
      <section>
        <Layout>
          <Grid container className={styles.gridContainer}>
            <Grid
              id={styles.firstImage}
              item
              xs={12}
              md={6}
              className={styles.imageContainer}
            >
              <Image
                src="/images/mountain_edit03.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="AO Mountain range"
              />
            </Grid>
            <Grid item xs={12} md={6} className={styles.detailsContainer}>
              <h1>We Become A Part Of Your Team</h1>
              <p>
                Transparency. Innovation. Collaboration. We are part of your
                team, and you are part of ours! As a client, you will have full
                access to our market software to view campaign performance. You
                are always welcome to be part of our daily internal Stand-Up
                meetings and to enjoy bottomless coffee and support at our
                offices.
              </p>
            </Grid>
            <Grid
              id={styles.secondImage}
              item
              xs={12}
              md={6}
              className={styles.imageContainer}
            >
              <Image
                src="/images/mountain_edit03.jpg"
                layout="fill"
                alt="mountain range"
              />
            </Grid>
          </Grid>
        </Layout>
      </section>
      {/* What we do section */}
      <section>
        <Layout>
          <h1 className={styles.servicesHeader}>What We Can Do For You.</h1>
          <Grid container spacing={4} className={styles.servicesCardContainer}>
            <Grid item>
              <ImageCard
                options={{
                  imagePath: "/images/cardimages/image1.jpg",
                  title: "Digital Marketing Services",
                  paragraph:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis erat, posuere eget rhoncus eu, feugiat a ipsum. Duis sollicitudin ante sed tortor rhoncus, a suscipit quam porta",
                }}
              />
            </Grid>
            <Grid item>
              <ImageCard
                options={{
                  imagePath: "/images/cardimages/image2.jpg",
                  title: "UI & UX Design",
                  paragraph:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis erat, posuere eget rhoncus eu, feugiat a ipsum. Duis sollicitudin ante sed tortor rhoncus, a suscipit quam porta",
                }}
              />
            </Grid>
            <Grid item>
              <ImageCard
                options={{
                  imagePath: "/images/cardimages/image3.jpg",
                  title: "Graphics Design",
                  paragraph:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis erat, posuere eget rhoncus eu, feugiat a ipsum. Duis sollicitudin ante sed tortor rhoncus, a suscipit quam porta",
                }}
              />
            </Grid>
            <Grid item>
              <ImageCard
                options={{
                  imagePath: "/images/cardimages/image4.jpg",
                  title: "Web Development",
                  paragraph:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis erat, posuere eget rhoncus eu, feugiat a ipsum. Duis sollicitudin ante sed tortor rhoncus, a suscipit quam porta",
                }}
              />
            </Grid>
            <Grid item>
              <ImageCard
                options={{
                  imagePath: "/images/cardimages/image5.jpg",
                  title: "Mobile App Development",
                  paragraph:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis erat, posuere eget rhoncus eu, feugiat a ipsum. Duis sollicitudin ante sed tortor rhoncus, a suscipit quam porta",
                }}
              />
            </Grid>
            <Grid item>
              <ImageCard
                options={{
                  imagePath: "/images/cardimages/image6.jpg",
                  title: "Consultations",
                  paragraph:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis erat, posuere eget rhoncus eu, feugiat a ipsum. Duis sollicitudin ante sed tortor rhoncus, a suscipit quam porta",
                }}
              />
            </Grid>
          </Grid>
        </Layout>
      </section>
      {/* Testimonials */}
      <section>
        <Layout>
          <Testimonials />
        </Layout>
      </section>
    </div>
  );
}

export default HomeLanding;
