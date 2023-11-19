// Button.jsx
import { useState } from 'react';

export const Button = ({ label, path, className, imageSrc, imgClass, hoverBackgroundClass }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Perform redirection upon button click
    window.location.href = path; // Use the path provided as a property
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    color: isHovered ? '#F5F5F5' : '#3d2d39',
    backgroundColor: isHovered ? hoverBackgroundClass : '#F5F5F5',
  };

  const imgStyle = {
    filter: isHovered ? 'brightness(0) invert(1)' : 'none',
  };

  return (
    <button
      className={`${className}`}
      style={buttonStyle}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="button-content">
        <img src={imageSrc} alt={label} className={imgClass} style={imgStyle} />
        <span>{label}</span>
      </div>
    </button>
  );
};
