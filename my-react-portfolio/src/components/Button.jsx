import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = ({ className, label, icon }) => {
  return (
    <button className={className} type="button">
      <FontAwesomeIcon className="button-icon" icon={icon} />
      {label}
    </button>
  );
};
