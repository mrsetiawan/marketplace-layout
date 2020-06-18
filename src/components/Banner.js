import React from "react";
import OwlCarousel from "react-owl-carousel";
import slider1 from "../assets/img/slider/home-4/1.jpg";
import imgLeft from "../assets/img/slider/home-4/left.jpg";

export const Banner = props => {
  return (
    <div className="ps-home-banner">
      <div className="container">
        <div className="ps-section__left">
          <OwlCarousel
            className="ps-carousel--nav-inside owl-slider"
            loop
            items={1}
          >
            <div className="col-lg-12">
              <a href="#">
                <img src={slider1} alt="slide 1" width="100%" />
              </a>
            </div>
          </OwlCarousel>
        </div>
        <div className="ps-section__right">
          <a className="ps-collection" href="#">
            <img src={imgLeft} alt="img-left" />
          </a>
        </div>
      </div>
    </div>
  );
};
