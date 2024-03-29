/* eslint-disable react/prop-types */
//single button with conditional rendering
import "./Button.css";

export const Button = ({ label, buttonType, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {buttonType === "liveDemo" && (
        <img src="livedemo.svg" alt="Live Demo" className="button-icon" />
      )}
      {buttonType === "github" && (
        <img src="github.svg" alt="GitHub" className="button-icon" />
      )}
      {label}
    </button>
  );
};
