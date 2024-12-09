/* eslint-disable react/prop-types */

/* ========== BUTTONS COMPONENT ========== */
/* This component contains the Watch It Live, Read Article, and View Code buttons used in the CardSection Component*/

import "./Button.css";

export const Button = ({
  icon,
  label,
  link,
  className,
  onClick,
  ariaLabel,
  variant = "outlined", // Default to outlined
  fullWidth = false, // Default to normal width
}) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <button
      className={`button ${variant} ${fullWidth ? "full-width" : ""} ${className || ""}`}
      onClick={onClick || handleClick}
      aria-label={ariaLabel || label} // Allow custom aria-label
    >
      {icon && (
        <img
          src={icon}
          alt=""
          className="icon"
          aria-hidden="true" 
        />
      )}
      <span className="label">{label}</span>
    </button>
  );
};

export default Button;
