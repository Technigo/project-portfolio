import "./Introduction.css";
import arrowSvg from "../../assets/icons/Arrow.svg";

export const Introduction = ({ avatarUrl, scrollToTechSection }) => {
  return (
    <section className="introduction-container">
      <div className="profile-image">
        <img src={avatarUrl} alt="profile-image" className="circle-image" />
      </div>
      <div className="heading-wrapper">
        <h3>Hi, I&apos;m Erica Mechler</h3>
        <h1 className="introduction-heading">Frontend Developer</h1>
        <div className="intro-text">
          <p className="normal">
            As a Front End Developer with a background in project management, I
            blend technical expertise with leadership skills to create
            exceptional digital solutions. I specialize in crafting intuitive
            user interfaces and driving projects forward. Let&apos;s collaborate
            to bring your vision to life!
          </p>
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
