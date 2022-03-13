import React from "react";
import { apiImages } from "../../utils/apiUtils";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div
      className="card"
      style={{
        width: "300px",
        height: "180px",
        marginLeft: "3px",
        backgroundColor: "black",
        backgroundImage: `url(${apiImages.backdrop(
          data.backdrop_path,
          apiImages.config.medium
        )})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="card_header"></div>
    </div>
  );
};

export default Card;
