import React from "react";
import "./Heading.css";

export const Heading = ({ text, color }) => {
  return (
    <div className="heading">
      <h1 style={{ color: color }}>{text}</h1>
    </div>
  );
};
