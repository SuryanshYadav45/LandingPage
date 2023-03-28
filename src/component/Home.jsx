import React from "react";
import "../styles/home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faCouch,faPaintBrush } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 854,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="homediv">
      <div className="carousel">
        <Carousel
          
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          autoPlay={false}
          
        >
          <div className="divcar">
            <div className="content">
              <h1>Arch Design Studio</h1>
              <h6>A Very Personel Approach to Every Client</h6>
              <p>Elegant Solution to Complex Problems</p>
              <div className="btndiv">
                <button className="homebtn">Get Started</button>
              </div>
            </div>
          </div>
          <div className="divcar">
            <div className="content">
              <h1>Arch Design Studio</h1>
              <h6>A Very Personel Approach to Every Client</h6>
              <p>Elegant Solution to Complex Problems</p>
              <div className="btndiv">
                <button className="homebtn">Get Started</button>
              </div>
            </div>
          </div>
          <div className="divcar">
            <div className="content">
              <h1>Arch Design Studio</h1>
              <h6>A Very Personel Approach to Every Client</h6>
              <p>Elegant Solution to Complex Problems</p>
              <div className="btndiv">
                <button className="homebtn">Get Started</button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="cardcarousel">
        <Slider {...settings} className="slider">
          <div className="cards">
          <div className="inner">
            <FontAwesomeIcon icon={faPaintBrush} className="couch"/>
            <h3>Exterior Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, dicta dolorum erfer erfer
            </p>
            </div>
          </div>
          <div className="cards">
          <div className="inner">
            <FontAwesomeIcon icon={faCouch} className="couch"/>
            <h3>Interior Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, dicta dolorum  erfer erfer
            </p>
            </div>
          </div>
          <div className="cards">
          <div className="inner">
            <FontAwesomeIcon icon={faPaintBrush} className="couch"/>
            <h3>Construction Drawing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, dicta dolorum erfer erfer
            </p>
            </div>
          </div>
          <div className="cards">
          <div className="inner">
            <FontAwesomeIcon icon={faCouch} className="couch" />
            <h3>Design & Planning</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, dicta dolorum erfer erfer
            </p>
            </div>
          </div>
        </Slider>
      </div>

      <div className="verticalcard">
        <div className="vcard">
          <FontAwesomeIcon icon={faCouch} className="couch"/>
            <h3>Exterior Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, dicta dolorum  erfer erfer
            </p>
        </div>
        <div className="vcard">
          <FontAwesomeIcon icon={faPaintBrush} className="couch"/>
            <h3>Interior Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, dicta dolorum  erfer erfer
            </p>
        </div>
        <div className="vcard">
          <FontAwesomeIcon icon={faCouch} className="couch"/>
            <h3>Construction Drawing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, dicta dolorum  erfer erfer
            </p>
        </div>
        <div className="vcard">
          <FontAwesomeIcon icon={faPaintBrush} className="couch"/>
            <h3>Design & Planning</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, dicta dolorum  erfer erfer
            </p>
        </div>
      </div>
    </div>
  );
}
