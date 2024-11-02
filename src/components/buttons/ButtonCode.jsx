import github2 from "../../assets/github2.svg";
import "./ButtonLive.css"

export const BtnCode = () => {
  return (
    <a className="btn-primary" href="#" aria-label="Live demo" >
      <img className="ic-web" alt="Ic github" src={github2} />
      <div className="text-wrapper" > View code </div>
    </a>
  );
};
