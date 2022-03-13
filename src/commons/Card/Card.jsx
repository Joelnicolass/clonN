import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div
      className="card"
      style={{
        width: "300px",
        height: "180px",
        marginLeft: "3px",
        backgroundColor: "black",
        backgroundImage: `url()`,
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
