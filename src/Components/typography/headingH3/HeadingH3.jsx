import React from "react";

import "./headingH3.css";

export const HeadingH3 = ({ text, className }) => {
  // Replace hyphens with spaces
  const formattedText = text.replace(/-/g, " ");

  return <h2 className={className}>{formattedText}</h2>;
};
