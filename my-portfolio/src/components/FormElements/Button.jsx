import PropTypes from "prop-types";

import "./Button.css";

// Reusable Button component
export const Button = ({
  className,
  btnUrl,
  iconUrl,
  iconAlt,
  btnText,
  onClick,
}) => {
  if (btnUrl) {
    // Render as an anchor element if btnUrl is provided
    return (
      <a
        className={`button ${className}`}
        href={btnUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {iconUrl && <img src={iconUrl} alt={iconAlt} />}
        {btnText}
      </a>
    );
  } else {
    // Render as a button element if onClick is provided
    return (
      <button className={`button ${className}`} onClick={onClick}>
        {iconUrl && <img src={iconUrl} alt={iconAlt} />}
        {btnText}
      </button>
    );
  }
};

// Prop type validation
Button.propTypes = {
  className: PropTypes.string,
  btnUrl: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
  iconAlt: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
