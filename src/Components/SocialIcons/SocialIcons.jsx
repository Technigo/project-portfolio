import React from "react";
import "./SocialIcons.css";

export const SocialIcons = ({ text, src, link, className }) => {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <img src={src} alt={text} />
      </a>
    </div>
  );
};
