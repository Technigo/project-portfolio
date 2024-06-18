import React from "react";
import "./HeaderSection.css";
import arrowIcon from "../assets/images/noun-arrow-2989497-FFFFFF.svg";
// import Heading from "./Heading";

export const Header = ({ repo }) => {
  // Check if the repo object and its owner property are defined
  if (!repo || !repo.owner) {
    return null; // Return null if repo or repo.owner is undefined
  }

  return (
    <div className="header-container">
      <div className="header-image-container">
        <img
          className="header-img"
          src={repo.owner.avatar_url}
          alt="Johanna Billingskog Nyberg profile picture"
        />
      </div>
      <div className="header-title">
        <h1 className="header-title-name">Johanna Billingskog Nyberg</h1>
        <h2 className="header-title-title">Frontend Developer</h2>
      </div>
      <div className="header-text">
        <p>
          Loves to build beautiful things - both digital and in real life.
          Curious and eager to master coding as a great complement to my
          background in e-commerce and graphic design. I'm a focused and
          creative doeer.
        </p>
      </div>
      {/* <div className="arrow-container">
        <img className="arrow-icon" src={arrowIcon} alt="Arrow" />
      </div> */}
    </div>
  );
};
