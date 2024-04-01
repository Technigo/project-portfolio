import "./Button.css";
import { useState } from "react";

export const Button = ({ className, text, icon, alt, url, hoverIcon }) => {
  const [buttonHover, setButtonHover] = useState(false);

  const handleHover = () => {
    setButtonHover(true);
  };

  const handleNotHover = () => {
    setButtonHover(false);
  };

  return (
    <div className="button">
      <a
        href={url}
        className={`button ${className}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleNotHover}
      >
        <img src={buttonHover ? hoverIcon : icon} alt={alt} />
        <p className="button-text">{text}</p>
      </a>
    </div>
  );
};
