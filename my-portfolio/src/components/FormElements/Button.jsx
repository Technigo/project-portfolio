import "./Button.css";

// Reusable Button component
export const Button = ({ className, btnUrl, iconUrl, iconAlt, btnText }) => {
  return (
    <a
      className={`button ${className}`}
      href={btnUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={iconUrl} alt={iconAlt} />
      {btnText}
    </a>
  );
};
