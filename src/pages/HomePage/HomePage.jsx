import React from "react";
import Banner from "./components/Banner/Banner";
import CarouselCards from "./components/CarrouselCards/CarouselCards";
import FilmCard from "./components/FilmCard/FilmCard";

const HomePage = () => {
  return (
    <>
      <Banner></Banner>

      <CarouselCards />
    </>
  );
};

export default HomePage;
