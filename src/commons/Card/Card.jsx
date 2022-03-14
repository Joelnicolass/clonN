import React, { useState } from "react";
import { apiImages } from "../../utils/apiUtils";
import "./Card.css";

const Card = ({ data }) => {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div
      className="card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        borderRadius: hover ? "10px 10px 0 0" : "10px",
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
      <div className={`card_header ${hover && "active"}`}>
        <h3>{data.title}</h3>
      </div>

      <div className={`card_buttons ${hover && "active"}`}>
        <div className="card_buttons_container">
          <button> ► </button>
          <button> i </button>
          <button> ♥ </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
