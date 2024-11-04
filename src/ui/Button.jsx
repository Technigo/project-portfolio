/* eslint-disable react/prop-types */
import "./Button.css";

export const Button = ({ text, onClick, className, icon }) => {
  console.log(`Rendering Button: ${text}`); // Log the button text
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {icon && <img src={icon} alt="" className="button-icon" />} {/* Render icon if provided */}
      <span>{text}</span>
    </button>
  );
};

