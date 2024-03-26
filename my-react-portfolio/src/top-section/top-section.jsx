import "./top-section.css";
import { FaArrowDown } from "react-icons/fa6";
import Linda from "../assets/FotoLinda.jpg";

export const TopSection = () => {
  return (
    <div className="profile">
      <img
        src={Linda}
        alt="Picture of Linda Frischknecht, Frontend Developer."
      />
      <div className="person">
        <p className="linda">Hi, I am Linda Frischknecht</p>
        <p className="job">Web Developer</p>
      </div>
      <p className="description">
        With a background in Marketing and Tourism I embarqued on a coding
        adventure with a Bootcamp. Now I create user friendly Web-Applications!
        More about my background on my LinkedIn.
      </p>
      <div className="arrow-box">
        <FaArrowDown className="arrow" />
      </div>
    </div>
  );
};
