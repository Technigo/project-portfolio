import { Headline } from "../components/Headline.jsx";
import "./Introduction.css";

export const Introduction = () => {
  return (
    <div className="intro-container">
      <section className="intro-content-container">
        <img className="profile-img" src="profileImg.jpg" alt="profile image of Maja" />
        <div className="intro-header-box">
          <Headline style="name-title" title="Hi, I'm Maja Schouenke" />
          <Headline style="intro-title" title="Frontend Developer" />
        </div>
        <div className="intro-text-box">
          <p>
            Motivated by a strong curiosity, I keep expanding my knowledge and trying different things.
            <br />
            With a background in retail and in warehouse as an operation manager, i&apos;ve always enjoyed and been
            driven to find solutions and create sustainable methods to prevent future errors. Being a frontend developer
            I&apos;m able to do the things I really like to do - be creative, organise and create reliable methods.
          </p>
        </div>
        <div className="arrow-box">
          <img className="arrow-icon" src="icons/arrow.svg" alt="an arrow" />
        </div>
      </section>
    </div>
  );
};
