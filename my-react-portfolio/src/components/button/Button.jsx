export const Button = ({ icon, label, link}) => {
    const handleClick = () => {
        window.open(link, '_blank');
    };

  return (
    <button
      className="icon-button"
      onClick={handleClick}
      aria-label={label} // Provide a meaningful label
    >
      <img
        src={icon}
        alt=""
        className="icon"
        aria-hidden="true" // Hide the icon from assistive technologies
      />
      <span className="label">{label}</span>
    </button>
  );  
};