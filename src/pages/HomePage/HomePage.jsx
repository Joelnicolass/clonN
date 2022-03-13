import React, { useEffect } from "react";
import Banner from "../../commons/Banner/Banner";
import Carousel from "../../commons/CarouselCards/Carousel";
import Card from "../../commons/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import { homePageTypes } from "../../reducers/types/HomePage/types";
import { getPopularMovies } from "../../reducers/actions/HomePage/actions";
import CarouselPopularMovies from "./components/CarouselPopularMovies";

const HomePage = () => {
  // state management
  const apiState = useSelector((state) => state.api);
  const dispatch = useDispatch();

  // load popular movies
  useEffect(() => {
    dispatch(getPopularMovies());
  }, []);

  return (
    <>
      {apiState.isLoading ? (
        <div
          style={{
            display: "flex",
            height: "95vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Oval height={100} color={"red"} secondaryColor={"white"} />
        </div>
      ) : (
        <>
          <Banner data={apiState.data.results[0]} type={"movie"} />
          <CarouselPopularMovies popularMovies={apiState.data.results} />
        </>
      )}
    </>
  );
};

export default HomePage;
