import React, { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCarousel from "../../../../commons/Swiper/SwiperCarousel";
import Card from "../../../../commons/Card/Card";

const CarouselCards = () => {
  return (
    <div
      style={{
        margin: "1em 1em 0 0",
      }}
    >
      <SwiperCarousel>
        {Array.from(Array(10)).map((item, index) => (
          <SwiperSlide key={index}>
            <Card />
          </SwiperSlide>
        ))}
      </SwiperCarousel>
    </div>
  );
};

export default CarouselCards;
