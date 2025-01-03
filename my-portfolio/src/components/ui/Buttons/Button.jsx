/* eslint-disable react/prop-types */
import "./Button.css";

export const Button = ({ text, icon, href, target, sectionType = "default", isViewMore }) => {
  const buttonClass = isViewMore
    ? `${sectionType}-view-more-button`
    : `${sectionType}-button`;

  return (
    <a
      className={`button ${buttonClass}`}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {icon && <img src={icon} alt="icon" className={`${sectionType}-button-icon`} />}
      {text}
    </a>
  );
};