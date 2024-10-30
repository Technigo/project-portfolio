import helene from "../../assets/images/helene-westrin.png";
import "./Pill.css";

const Pill = ({ children }) => {
  return (
    <div className="pill">
      <img
        className="pill__avatar"
        width="72"
        height="72"
        alt=""
        src={helene}
      />
      <span className="pill__text">{children}</span>
    </div>
  );
};

export default Pill;
