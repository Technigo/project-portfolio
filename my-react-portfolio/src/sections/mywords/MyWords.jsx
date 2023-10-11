import "./mywords.css";
import squiggly from "../../assets/squiggly.svg";

export const MyWords = () => {
  return (
    <div className="my-words">
      <div className="divider">
        <img src={squiggly} alt="squiggly-line" className="squiggly" />
      </div>
      <h2 className="my-words-title">My words</h2>
    </div>
  );
};
