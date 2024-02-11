import React from "react";

import "./projectImg.css";

export const ProjectImg = ({ src, alt }) => {
  return (
    <>
      <img className="project-img" src={src} alt={alt} />
    </>
  );
};
