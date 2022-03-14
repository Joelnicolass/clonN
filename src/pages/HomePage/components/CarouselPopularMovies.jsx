import React from "react";
import { SwiperSlide } from "swiper/react";
import Carousel from "../../../commons/components/CarouselCards/Carousel";
import Card from "../../../commons/components/Card/Card";

const CarouselPopularMovies = ({ popularMovies }) => {
  return (
    <>
      <Carousel>
        {popularMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Card data={movie} />
          </SwiperSlide>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselPopularMovies;
