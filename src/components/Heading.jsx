import React from "react";
import "./Heading.css";

export const Heading = ({ text, color }) => {
  return (
    <div className="heading">
      <h2 style={{ color: color }}>{text.toUpperCase()}</h2>
    </div>
  );
};
