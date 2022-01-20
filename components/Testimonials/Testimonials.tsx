import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import styles from "../../styles/Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testimonialsContainer}>
      <h1 className={styles.testimonialsHeader}>
        Here is what our clients say about us.
      </h1>
      <Splide
        options={{
          arrows: false,
          rewind: true,
          autoplay: true,
        }}
      >
        <SplideSlide>
          <p className={styles.testimonialsDetails}>
            {`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            culpa reiciendis consectetur nihil voluptatibus soluta ab laudantium
            mollitia, iste tenetur dolorem quod eligendi, cumque eius dolor
            inventore velit. Iusto qui in necessitatibus a porro, recusandae
            nesciunt eaque, veniam laborum perferendis itaque quae aliquam nobis
            debitis quibusdam, soluta quisquam sed! Non?"`}
          </p>
          <p className={styles.testimonialsAuthor}>
            Bill Gates - CEO of Microsoft
          </p>
        </SplideSlide>
        <SplideSlide>
          <p className={styles.testimonialsDetails}>
            {`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            culpa reiciendis consectetur nihil voluptatibus soluta ab laudantium
            mollitia, iste tenetur dolorem quod eligendi, cumque eius dolor
            inventore velit. Iusto qui in necessitatibus a porro, recusandae
            nesciunt eaque, veniam laborum perferendis itaque quae aliquam nobis
            debitis quibusdam, soluta quisquam sed! Non?"`}
          </p>
          <p className={styles.testimonialsAuthor}>Elon Musk - CEO of Tesla</p>
        </SplideSlide>
        <SplideSlide>
          <p className={styles.testimonialsDetails}>
            {`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            culpa reiciendis consectetur nihil voluptatibus soluta ab laudantium
            mollitia, iste tenetur dolorem quod eligendi, cumque eius dolor
            inventore velit. Iusto qui in necessitatibus a porro, recusandae
            nesciunt eaque, veniam laborum perferendis itaque quae aliquam nobis
            debitis quibusdam, soluta quisquam sed! Non?"`}
          </p>
          <p className={styles.testimonialsAuthor}>
            Jeff Bezos - CEO of Amazon
          </p>
        </SplideSlide>
        <SplideSlide>
          <p className={styles.testimonialsDetails}>
            {`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            culpa reiciendis consectetur nihil voluptatibus soluta ab laudantium
            mollitia, iste tenetur dolorem quod eligendi, cumque eius dolor
            inventore velit. Iusto qui in necessitatibus a porro, recusandae
            nesciunt eaque, veniam laborum perferendis itaque quae aliquam nobis
            debitis quibusdam, soluta quisquam sed! Non?"`}
          </p>
          <p className={styles.testimonialsAuthor}>
            Mark Zuckerberg - CEO of Meta
          </p>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Testimonials;
