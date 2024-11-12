/* eslint-disable react/prop-types */
import "./Button.css";

export const Button = ({ text, icon, onClick, sectionType = "default", isViewMore }) => {
  const buttonClass = isViewMore
    ? `${sectionType}-view-more-button`  
    : `${sectionType}-button`;  

  return (
    <button className={`button ${buttonClass}`} onClick={onClick}>
      {icon && <img src={icon} alt="icon" className={`${sectionType}-button-icon`} />}
      {text}
    </button>
  );
};

