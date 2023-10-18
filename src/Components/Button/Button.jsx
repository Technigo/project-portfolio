import React from "react";

import "./Button.css";

export const Button = ({ link, buttonName, iconAlt, className }) => {
  return (
    <div className="button">
      <a
        href={link}
        className={className}
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="button-content-wrapper">
          <div className="button-image" alt={iconAlt}></div>
          {buttonName}
        </div>
      </a>
    </div>
  );
};
