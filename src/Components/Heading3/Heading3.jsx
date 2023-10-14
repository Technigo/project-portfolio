import React from "react";

import "./Heading3.css";

export const Heading3 = ({ className, text }) => {
  return <h3 className={`${className}`}>{text}</h3>;
};
