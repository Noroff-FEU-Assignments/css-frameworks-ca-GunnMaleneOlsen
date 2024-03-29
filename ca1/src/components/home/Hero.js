import React from "react";
import { Carousel } from "react-bootstrap";

function Hero() {
  return (
    <Carousel  controls={false} slide={false}>
      <Carousel.Item>
        <img
          className="d-block"
          src="Carousel images\carousel-1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="Carousel images\carousel-2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="Carousel images\carousel-3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
