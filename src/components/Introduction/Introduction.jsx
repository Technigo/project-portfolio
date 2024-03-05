import { IntroHeading } from "../Headings/MainHeading/IntroHeading.jsx";
import { SubHeading } from "../Headings/SubHeading/SubHeading.jsx";
import { ProfilePhoto } from "../ProfilePhoto/ProfilePhoto.jsx";
import { SocialMediaLinks } from "../SocialMedia/SocialMediaLinks.jsx";
import arrowIcon from "/assets/ArrowUp.svg";
import "./Introduction.css";

export const Introduction = () => {
  return (
    <div className="introduction-container">
      <div className="introduction-wrapper">
        <div className="photo-wrapper">
          <ProfilePhoto />
        </div>
        <div className="heading-wrapper">
          <SubHeading
            className={"introduction-h3"}
            text={"Hi, I'm Anna Robertsson"}
          />
          <IntroHeading
            className={"introduction-h1"}
            text={"Frontend Developer"}
          />
        </div>
        <div className="presentation-wrapper">
          <p>
            Anna&apos;s journey from ophthalmic nursing to tech has infused her
            work with a passion for inclusive design in web development. With a
            focus on creating user-friendly applications, her background fosters
            a commitment to accessibility. Her keen eye for design and
            dedication to crafting aesthetically pleasing products, but also
            inclusive solutions, makes her a valuable asset to any tech project.
            {/* Anna is a talented developer recognized for her innovative solutions
            and strong coding skills. With a background as an ophthalmic nurse,
            she places a strong emphasis on accessibility, aiming to create
            solutions that are inclusive and user-friendly. Her commitment to
            excellence and interest in design makes her a valuable asset to any
            project in the technology field. */}
          </p>
        </div>
        <div className="introduction-links-wrapper">
          <SocialMediaLinks className={"introduction-links"} />
        </div>
      </div>
      <img
        src={arrowIcon}
        className="arrow-icon"
        alt="Icon of an arrow pointing down to indicate there's more content underneath"
      />
    </div>
  );
};
