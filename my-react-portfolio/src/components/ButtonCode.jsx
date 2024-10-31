import github from "../assets/github.svg";
import "./ButtonLive.css"

export const BtnCode = () => {
  return (

    <a className="btn-primary" href="#" aria-label="Live demo" >
      <img className="ic-web" alt="Ic github" src={github} />
      <div className="text-wrapper" > View code </div>
    </a>
  );
};
