import React from "react";
import TouchCarousel from "react-touch-carousel/lib/TouchCarousel";
import FilmCard from "../FilmCard/FilmCard";

const CarrouselCards = () => {
  const items = [FilmCard, FilmCard, FilmCard, FilmCard];

  return <TouchCarousel></TouchCarousel>;
};

export default CarrouselCards;
