import icWeb from "../assets/Ic-Web.svg";
import "./ButtonLive.css"

export const BtnLive = () => {
  return (
    <a className="btn-primary" href="#" aria-label="Live demo" >
      <img className="ic-web" alt="Ic web" src={icWeb} />
      <div className="text-wrapper" > Live demo </div>
    </a>
  );
};
