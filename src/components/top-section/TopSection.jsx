import { VscArrowSmallDown } from "react-icons/vsc";
import "./TopSection.css";

export const TopSection = () => {
  return (
    <div>
      <div className="profile">
        <img src="ph-jonas.jpg" alt="Picture of Jonas Hellström, Web Developer." />
        <div className="person">
          <p className="jonas">Hi, I am Jonas</p>
          <p className="job">Web Developer</p>
          <p className="description">
            Jonas is an exceptional developer known for his innovative solutions and exceptional coding abilities. He creates user-friendly applications and solves complex issues with ease. His drive for excellence makes him a valuable asset to any project and a standout in the technology field.
          </p>
        </div>
      </div>
      <div className="arrow-box">
        <VscArrowSmallDown className="arrow" />
      </div>
    </div>
  );
};
