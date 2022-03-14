import React from "react";

const SubTitle = ({ text }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100px",
        lineHeight: "50px",
        fontSize: "large",
      }}
    >
      <h2
        style={{
          marginLeft: "2em",
        }}
      >
        {text}
      </h2>
    </div>
  );
};

export default SubTitle;
