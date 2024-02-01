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

  const buttonStyle = {
    backgroundImage: `url(${isHovered ? hoverIcon : icon})`,
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button"
    >
      <img src={isHovered ? hoverIcon : icon} alt={alt} className="icon" />
      <span className="button-text">{buttonText}</span>
    </a>
  );

  // return (
  //   <a href={url} target="_blank" rel="noopener noreferrer">
  //     <button
  //       className={`link-button ${isHovered ? "hovered" : ""}`}
  //       onMouseEnter={handleMouseEnter}
  //       onMouseLeave={handleMouseLeave}
  //       style={buttonStyle}
  //     >
  //       {buttonText}
  //     </button>
  //   </a>
  // );
};

// import "./LinkButton.css";
// import React, { useState } from "react";

// export const LinkButton = ({ buttonText, url, icon, hoverIcon, alt }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <a href={url} target="_blank" rel="noopener noreferrer">
//       <div
//         className={`link-button ${isHovered ? "hovered" : ""}`}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <img src={isHovered ? hoverIcon : icon} alt={alt} className="icon" />
//         {buttonText}
//       </div>
//     </a>
//   );
// };

// export const LinkButton = ({ type, text, icon, onClick, href }) => {
//   return (
//     <a
//       className={`Button ${type}`}
//       href={href}
//       onClick={onClick}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <span className="button-icon">{icon}</span>
//       <span className="button-text">{text}</span>
//     </a>
//   );
// };
