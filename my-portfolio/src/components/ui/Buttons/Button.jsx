/* eslint-disable react/prop-types */
import "./Button.css";

export const Button = ({ text, icon, onClick, sectionType }) => {
  return (
    <button className={`button ${sectionType}-button`} onClick={onClick}>
      {icon && <img src={icon} alt="" className={`${sectionType}-button-icon`} />}
      {text}
    </button>
  );
};

