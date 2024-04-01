import "./Button.css";
import PropTypes from "prop-types";

// Reusable Button component
export const Button = ({ className, btnUrl, iconUrl, iconAlt, btnText }) => {
  return (
    <a
      className={`button ${className}`}
      href={btnUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={iconUrl} alt={iconAlt} />
      {btnText}
    </a>
  );
};

// Prop type validation
Button.propTypes = {
  className: PropTypes.string,
  btnUrl: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
  iconAlt: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};
