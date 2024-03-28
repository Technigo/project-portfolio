import "./TopSection.css";
import { FaArrowDown } from "react-icons/fa6";
import Linda from "/FotoLinda.jpg";

export const TopSection = () => {
  return (
    <div>
      <div className="profile">
        <img src={Linda} alt="Picture of Linda Frischknecht, Web Developer." />
        <div className="person">
          <p className="linda">Hi, I am Linda Frischknecht</p>
          <p className="job">Web Developer</p>
        </div>
        <p className="description">
          With a background in Marketing and Tourism I embarqued on a coding
          adventure with a Bootcamp. Now I create user friendly
          Web-Applications! I am a remote work enthusiast and I believe that
          working in teams helps everyone get more creative.
        </p>
      </div>
      <div className="arrow-box">
        <FaArrowDown className="arrow" />
      </div>
    </div>
  );
};
