import React from "react";
import Banner from "./components/Banner/Banner";
import CarrouselCards from "./components/CarrouselCards/CarrouselCards";
import FilmCard from "./components/FilmCard/FilmCard";

const HomePage = () => {
  return (
    <>
      <Banner></Banner>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <CarrouselCards></CarrouselCards>
      </div>
    </>
  );
};

export default HomePage;
