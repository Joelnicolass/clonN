import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      className="banner_container"
      style={{
        backgroundImage: `url(https://bohmtheatre.org/wp-content/uploads/2015/09/film-banner.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain", // or cover
        backgroundPosition: "center",
      }}
    >
      <div className="banner">
        <div className="banner_header">
          <h1>N</h1>
          <p>S E R I E</p>
        </div>
        <div className="banner_sub">
          <p>Ve la temporada 1</p>
        </div>
        <div className="banner_description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, urna eu tincidunt consectetur, nisi
          </p>
        </div>
        <div className="banner_buttons">
          <button className="banner_button"> ► Reproducir</button>
          <button className="banner_button"> Mas información</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
