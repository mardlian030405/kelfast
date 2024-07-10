"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import banner from "/public/banner.png";
import banner1 from "/public/banner1.png";
import banner2 from "/public/banner2.png";

const ImageSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className="container max-w-max pt-8 my-8">
        <Slider {...settings}>
          <div>
            <Image
              src={banner}
              alt={`BANNER`}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div>
            <Image
              src={banner1}
              alt={`BANNER`}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div>
            <Image
              src={banner2}
              alt={`BANNER`}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
