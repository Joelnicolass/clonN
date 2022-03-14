import React, { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCarousel from "../Swiper/SwiperCarousel";

const Carousel = ({ children }) => {
  return (
    <div
      style={{
        margin: "1em 1em 0 0",
      }}
    >
      <SwiperCarousel>{children}</SwiperCarousel>
    </div>
  );
};

export default Carousel;
