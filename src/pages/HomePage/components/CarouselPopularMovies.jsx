import React from "react";
import { SwiperSlide } from "swiper/react";
import Card from "../../../commons/Card/Card";
import Carousel from "../../../commons/CarouselCards/Carousel";

const CarouselPopularMovies = ({ popularMovies }) => {
  return (
    <>
      <Carousel>
        {popularMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Card />
          </SwiperSlide>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselPopularMovies;
