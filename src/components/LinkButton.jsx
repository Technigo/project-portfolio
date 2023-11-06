import "./LinkButton.css";
import React, { useState } from "react";

export const LinkButton = ({ buttonText, url, icon, hoverIcon, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div
        className={`link-button ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={isHovered ? hoverIcon : icon} alt={alt} className="icon" />
        {buttonText}
      </div>
    </a>
  );
};
