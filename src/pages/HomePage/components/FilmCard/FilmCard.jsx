import React from "react";

const FilmCard = () => {
  return (
    <div
      className="card"
      style={{
        width: "300px",
        height: "180px",
        marginLeft: "3px",
        backgroundImage: `url()`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // or contain
        backgroundPosition: "center",
        backgroundColor: "black",
      }}
    >
      <div className="card_header"></div>
    </div>
  );
};

export default FilmCard;
