/* eslint-disable react/prop-types */
import "./Button.css"

export const Button = ({ text, onClick, className, icon }) => {
  (`Rendering Button: ${text}`);
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {icon && <img src={icon} alt="" className="button-icon" />} {/* Render icon if provided */}
      <span>{text}</span>
    </button>
  );
};

