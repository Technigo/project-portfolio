export const LinkButton = ({ buttonText, url, icon }) => {
  const handleClick = () => {
    console.log(`Clicked ${buttonText}`);
    window.open(url, "_blank");
    // Add your logic to open the provided URL
    // For example: window.open(url);
  };

  return (
    <button onClick={handleClick} className="link-button">
      {icon && <img src={icon} alt="Icon" />}
      {buttonText}
    </button>
  );
};
