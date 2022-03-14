import React, { useEffect } from "react";
import Carousel from "../../commons/components/CarouselCards/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import { getPopularMovies } from "../../reducers/actions/HomePage/actions";
import CarouselPopularMovies from "./components/CarouselPopularMovies";
import SubTitle from "../../commons/components/SubTitle/SubTitle";
import Banner from "../../commons/components/Banner/Banner";

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
          <Banner data={apiState.data.popularMovies[0]} type={"movie"} />
          <SubTitle text={"Las Peliculas más populares"} />
          <CarouselPopularMovies popularMovies={apiState.data.popularMovies} />
        </>
      )}
    </>
  );
};

export default HomePage;
