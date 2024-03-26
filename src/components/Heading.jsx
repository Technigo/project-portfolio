import React from "react";
import "./Heading.css";

const Heading = ({ text }) => {
  return (
    <div className="heading">
      <h2>{text}</h2>
    </div>
  );
};

export default Heading;
