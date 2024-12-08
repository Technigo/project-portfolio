import { VscArrowSmallDown } from "react-icons/vsc";
import "./TopSection.css";

export const TopSection = () => {
  return (
    <div>
      <div className="profile">
        <img src="1692713315443.jpg" alt="Picture of Jonas Hellström, Web Developer." />
        <div className="person">
          <p className="jonas">Hi, I am Jonas</p>
          <p className="job">Web Developer</p>
          <p className="description">
            Newly graduated web developer with nearly 10 years of experience in e-commerce and digital marketing. Hands-on experience in developing accessible and user-friendly web applications using JavaScript (ES6), React, and Node.js. Passionate about learning and growth, with a strong focus on code quality and user-centered solutions.
          </p>
        </div>
      </div>
      <div className="arrow-box">
        <VscArrowSmallDown className="arrow" />
      </div>
    </div>
  );
};
