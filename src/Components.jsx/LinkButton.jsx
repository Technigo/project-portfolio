import "./LinkButton.css";
// The functions of all buttons on my page //
export const LinkButton = ({ buttonText, url, icon }) => {
  const handleClick = () => {
    console.log(`Clicked ${buttonText}`);
    window.open(url, "_blank");
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button className="link-button" onClick={handleClick}>
        {icon && <img src={icon} alt="Icon" />}
        {buttonText}
      </button>
    </a>
  );
};
