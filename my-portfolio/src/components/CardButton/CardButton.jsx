// CardButton.jsx

import "./CardButton.css"

export const CardButton = ({ url, btnText, color }) => {
  return (
    <button className={`card-btn ${color}`}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer">
        {btnText}
      </a>
    </button>
  );
};