import "./Introduction.css";
import { Subheading } from "../../components/TextElements/Subheading";
import arrowSvg from "/icons/arrow.svg";
import { Image } from "../../components/ImageElements/Image";
import { NormalText } from "../../components/TextElements/NormalText";

export const Introduction = ({ avatarUrl, scrollToTechSection }) => {
  const introText =
    "As a Front End Developer with a background in project management, I blend technical expertise with leadership skills to create exceptional digital solutions. I specialize in crafting intuitive user interfaces and driving projects forward. Let's collaborate to bring your vision to life!";

  return (
    <section className="introduction-container">
      <Image
        divClassName={"profile-image"}
        elementClassName={"circle-image"}
        imagePath={avatarUrl}
        imageAltText={"Profile-picture of Erica"}
      />
      <div className="heading-wrapper">
        <Subheading text={"Hi, I'm Erica Mechler"} />
        <h1 className="introduction-heading">Frontend Developer</h1>
        <div className="intro-text">
          <NormalText text={introText} />
        </div>
      </div>
      <div className="arrow-container">
        <button onClick={scrollToTechSection}>
          <img className="arrow" src={arrowSvg} alt="arrow icon" />
        </button>
      </div>
    </section>
  );
};
