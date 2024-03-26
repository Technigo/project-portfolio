import React from "react";
import "./Heading.css";

const Heading = ({ text, color }) => {
  return (
    <div className="heading">
      <h2 style={{ color: color }}>{text}</h2>
    </div>
  );
};

export default Heading;
