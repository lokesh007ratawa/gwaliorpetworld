import React from 'react-dom';
import { Carousel } from 'react-bootstrap';
import img1 from "../images/slider4.jpg";
import img2 from "../images/slider7.jpg";
import img3 from "../images/slider5.jpg";
import img4 from "../images/puppy.jpg";
import slider from "../images/slider.jpg";
import slider1 from "../images/slider2.jpg";
import im2 from "../images/slider3.jpg";

const Slider = () => {
  return (
    <>
      <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img4}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider1}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={im2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="Third slide"
            />
          </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;