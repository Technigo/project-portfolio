import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = ({ className, label, icon, url }) => {
  const handleOnclick = () => {
    console.log(url);
    window.open(url);
  };

  return (
    <button className={className} type="button" onClick={handleOnclick}>
      <FontAwesomeIcon className="button-icon" icon={icon} />
      {label}
    </button>
  );
};
