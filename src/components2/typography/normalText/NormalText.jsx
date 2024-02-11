import React from "react";

import "./normalText.css";

export const NormalText = ({ className, text }) => {
  return <p className={className}>{text}</p>;
};
