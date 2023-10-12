import "./LinkButton.css";

export const LinkButton = ({ buttonText, url, icon }) => {
  const handleClick = () => {
    console.log(`Clicked ${buttonText}`);
    window.open(url, "_blank");
  };

  return (
    <button onClick={handleClick} className="link-button">
      {icon && <img src={icon} alt="Icon" />}
      {buttonText}
    </button>
  );
};
