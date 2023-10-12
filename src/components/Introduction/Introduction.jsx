import { MainHeading } from "../Headings/MainHeading/MainHeading.jsx";
import { SubHeading } from "../Headings/SubHeading.jsx";
import { ProfilePhoto } from "../ProfilePhoto/ProfilePhoto.jsx";
import arrowIcon from "../../assets/ArrowUp.svg";
import "./Introduction.css";

export const Introduction = () => {
  return (
    <div className="introduction-container">
      <div className="introduction-wrapper">
        <div className="photo-wrapper">
          <ProfilePhoto />
        </div>
        <div className="heading-wrapper">
          <SubHeading text={"Hi, I'm Anna Robertsson"} />
          <MainHeading
            className={"introduction-h2"}
            text={"Frontend Developer"}
          />
        </div>
        <div className="presentation-wrapper">
          <p>
            Anna is an exceptional developer known for her innovative solutions
            and exceptional coding abilities. She creates user-friendly
            applications and solves complex issues with ease. Her drive for
            excellence makes her a valuable asset to any project and a standout
            in the technology field.
          </p>
        </div>
      </div>
      <img
        src={arrowIcon}
        className="arrow-icon"
        alt="Icon of an arrow pointing down"
      />
    </div>
  );
};
