/* eslint-disable react/prop-types */
import "./Button.css";

export const Button = ({ text, onClick, className, icon }) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {icon && <img src={icon} alt="" className="button-icon" />} {/* Render icon if provided */}
      {icon && <img src={icon} alt="" style={{ width: '20px', height: '20px' }} />}
      {text}
    </button>
  );
};