import React from "react";
import "./Tag.css";

export const Tag = ({ tagText, className }) => {
  return <span className={`tag ${className}`}>{tagText}</span>;
};
