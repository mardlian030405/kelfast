"use client";
import Image from "next/image";
import juara from "/public/juara.png";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="bg-blue-dark">
      <div className="container pt-7 max-sm:pt-10 max-w-max mt-5">
        <Slider {...settings}>
          <div>
            <Image
              className="rounded block w-full h-96 max-sm:h-auto"
              src={juara}
              alt={`BANNER`}
            />
          </div>
          <div>
            <Image
              className="rounded block w-full h-96 max-sm:h-auto"
              src={juara}
              alt={`BANNER`}
            />
          </div>
          <div>
            <Image
              className="rounded block w-full h-96 max-sm:h-auto"
              src={juara}
              alt={`BANNER`}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SimpleSlider;
