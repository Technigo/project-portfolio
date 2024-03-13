import "./Button.css";

// This button component creates a clickable button with a link. It allows for customization of the link, button label, icon, and CSS class. When used, it renders a clickable area with the specified content and behavior.
export const Button = ({ link, buttonName, iconAlt, className }) => {
  return (
    <div className="button">
      <a
        href={link}
        className={className}
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="button-content-wrapper">
          <div className="button-image" alt={iconAlt}></div>
          {buttonName}
        </div>
      </a>
    </div>
  );
};
