import React, { useEffect, useState } from "react";
import "./Banner.css";
import { apiImages } from "../../../utils/apiUtils";
import { getPopularMovies } from "../../../services/services";

const Banner = ({ data, type }) => {
  const [hideBannerHeader, setHideBannerHeader] = useState(false);
  const [hideBannerTitle, setHideBannerTitle] = useState(false);
  const [hideBannerTitleMovie, setHideBannerTitleMovie] = useState(false);
  const [hideBannerDescription, setHideBannerDescription] = useState(false);
  const [hideBannerButtons, setHideBannerButtons] = useState(false);

  useEffect(() => {
    //scroll effect
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        setHideBannerHeader(true);
      } else {
        setHideBannerHeader(false);
      }
      if (window.scrollY > 200) {
        setHideBannerTitle(true);
      } else {
        setHideBannerTitle(false);
      }
      if (window.scrollY > 300) {
        setHideBannerTitleMovie(true);
      } else {
        setHideBannerTitleMovie(false);
      }
      if (window.scrollY > 330) {
        setHideBannerDescription(true);
      } else {
        setHideBannerDescription(false);
      }
      if (window.scrollY > 550) {
        setHideBannerButtons(true);
      } else {
        setHideBannerButtons(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div
      className="banner_container"
      style={{
        backgroundImage: `url(${apiImages.backdrop(
          data.backdrop_path,
          apiImages.config.large
        )})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="banner">
        <div className="banner_header">
          {type === "tv" ? (
            <div
              className={`banner_header_content ${
                hideBannerHeader && "banner_hide"
              }`}
            >
              <h1>N</h1>
              <p>S E R I E</p>
            </div>
          ) : (
            <div
              className={`banner_header_content ${
                hideBannerHeader && "banner_hide"
              }`}
            >
              <h1>N</h1>
              <p>P E L I C U L A</p>
            </div>
          )}
        </div>
        <div className={`banner_title ${hideBannerTitle && "banner_hide"}`}>
          <h1>{data.title}</h1>
        </div>
        <div className={`banner_sub ${hideBannerTitleMovie && "banner_hide"}`}>
          {type === "tv" ? <p>Ve la temporada 1</p> : <p>Ve el estreno</p>}
        </div>
        <div
          className={`banner_description ${
            hideBannerDescription && "banner_hide"
          }`}
        >
          <p>{data.overview}</p>
        </div>
        <div className={`banner_buttons ${hideBannerButtons && "banner_hide"}`}>
          <button onClick={() => {}} className="banner_button">
            {" "}
            ► Reproducir
          </button>
          <button className="banner_button"> Mas información</button>
        </div>
      </div>
      <div className="banner_gradient"></div>
    </div>
  );
};

export default Banner;
