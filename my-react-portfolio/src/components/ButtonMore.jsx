import icArrowdown from "../assets/Ic-ArrowDown.svg";
import "./ButtonMore.css"

export const BtnMore = () => {
  return (
    <div className="btn-secondary">
      <img className="ic-arrowdown" alt="Ic arrowdown" src={icArrowdown} />
      <div className="text-wrapper">See more projects</div>
    </div>
  );
};