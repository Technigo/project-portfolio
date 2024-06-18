import React from "react";
import arrowIcon from "../assets/images/arrow.svg";
import "./Arrow.css";

export const Arrow = () => {
  return (
    <div className="arrow-container">
      <img className="arrow-icon" src={arrowIcon} alt="Arrow" />
    </div>
  );
};
