import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../assets/images/sliderCarousel/slider1.avif";
import slide2 from "../../assets/images/sliderCarousel/slider2.avif";
import slide3 from "../../assets/images/sliderCarousel/slider3.avif";
import styles from "./SliderCarousel.module.css";

export default function SliderCarousel() {
  let slideStyle = { height: "20rem", marginTop: "2rem", marginBottom: "2rem", overflow: "hidden" };
  return (
    <Carousel interval={15000} wrap={true}>
      <Carousel.Item  style={slideStyle}>
        <img className={`${styles.image1} ${["d-block w-100"]}`} src={slide1} alt="First slide" />
        <p className={`${styles.capture} ${styles.capture1}`}>У нас только натуральные продукты</p>
      </Carousel.Item>
      <Carousel.Item style={slideStyle}>
        <img className={`${styles.image2} ${["d-block w-100"]}`} src={slide2} alt="Second slide" />
        <p className={`${styles.capture} ${styles.capture2}`}>Авто по выгодным ценам</p>
      </Carousel.Item>
      <Carousel.Item style={slideStyle}>
        <img className={`${styles.image3} ${["d-block w-100"]}`} src={slide3} alt="Third slide" />
        <p className={`${styles.capture} ${styles.capture3}`}>Скидки 25%</p>
        <p className={`${styles.capture} ${styles['capture-subtitle']}`}>на все украшения</p>
      </Carousel.Item>
    </Carousel>
  );
}
