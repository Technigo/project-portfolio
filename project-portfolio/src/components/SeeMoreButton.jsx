
import "./SeeMoreButton.css";
import icon from "../assets/icons/arrow_circle_down.svg";

export const SeeMoreButton = ({ text, url, variant }) => {
  return (
    <div className="see-more-btn-container">
      <a
        href={url || "#"}
        className={`see-more-button ${variant}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={icon} alt="Icon" className={`button-icon ${variant}-icon`} /> {/* Add the icon */}
        {text}
      </a>
    </div>
  );
};
