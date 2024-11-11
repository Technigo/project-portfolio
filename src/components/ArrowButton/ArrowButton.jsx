import arrowIcon from "../../assets/arrow-down.svg";
import "./ArrowButton.css";

export const ArrowButton = ({
  text = "See more",
  variant = "black-on-white",
  onClick,
}) => {
  const buttonClass =
    variant === "white-on-black"
      ? "arrow-button white-on-black"
      : "arrow-button black-on-white";
  const iconClass =
    variant === "white-on-black" ? "button-icon inverted" : "button-icon";

  return (
    <button onClick={onClick} className={buttonClass} aria-label={text}>
      <img src={arrowIcon} alt={`${text}`} className={iconClass} />
      {text}
    </button>
  );
};
