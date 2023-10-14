import "./LinkButton.css";
import React, { useState } from "react";

// export const LinkButton = ({ buttonText, url, icon }) => {
//   const handleClick = () => {
//     console.log(`Clicked ${buttonText}`);
//     window.open(url, "_blank");
//   };

//   return (
//     <button onClick={handleClick} className="link-button">
//       {icon && <img src={icon} alt="Icon" />}
//       {buttonText}
//     </button>
//   );
// };
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
