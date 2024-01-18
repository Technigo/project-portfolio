import "./Button.css";

export const Button = ({ type, text, onClick, href, iconSrc, iconAlt }) => {
  return (
    <a
      className={`Button ${type}`}
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer">
      {iconSrc && <img className="button-icon" src={iconSrc} alt={iconAlt} />}
      <span className="button-text">{text}</span>
    </a>
  );
};
