import { ProfileImage } from "../profileImage/ProfileImage";
import { Heading } from "../heading/Heading";
import "./Introduction.css";

export const Introduction = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="profile-wrapper">
          <ProfileImage />
        </div>
        <div className="welcome-wrapper">
          <p className="welcome">Hi, I&apos;m Eliane</p>
          <Heading
            level="1"
            text="Project Manager & Frontend Developer"
            className="dark"
          />
        </div>
        <div className="intro-wrapper">
          <p>
            I&#39;m a project and marketing manager with a passion for scuba
            instruction, now diving into the world of coding. Currently immersed
            in a fast paced 6 month web development bootcamp, where I&#39;m
            learning a set of new skills like HTML, CSS, JavaScript, React,
            MongoDB and Node.js.
          </p>
        </div>
        <button className="arrow-container">
          <img src="../arrow.svg" alt="scroll-down-button" />
        </button>
      </div>
    </section>
  );
};
