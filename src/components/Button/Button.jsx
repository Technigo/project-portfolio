import "./Button.css";

export const Button = ({ buttonStyle, icon, altText, link, buttonText }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <button className={buttonStyle} onClick={handleClick}>
      <img src={icon} alt={altText} />
      {buttonText}
    </button>
  );
};
