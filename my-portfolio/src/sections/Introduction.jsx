import { Headline } from "../components/Headline.jsx";
import "./Introduction.css";

export const Introduction = () => {
  return (
    <section className="intro-container">
      <div className="intro-mobile-container">
        <img className="profile-img" src="profileImg.jpg" alt="profile image of Maja" />

        <div className="intro-title-box">
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

        <img className="arrow-icon" src="icons/arrow.svg" alt="an arrow" />
      </div>

      {/* A desktop layoput that are hidden until required screen size is achieved */}

      <div className="intro-desktop-container">
        <div className="intro-title-box">
          <Headline style="name-title" title="Hi, I'm Maja Schouenke" />
          <Headline style="intro-title" title="Frontend Developer" />
        </div>

        <div className="intro-info-box">
          <img className="profile-img" src="profileImg.jpg" alt="profile image of Maja" />
          <p>
            Motivated by a strong curiosity, I keep expanding my knowledge and trying different things.
            <br />
            With a background in retail and in warehouse as an operation manager, i&apos;ve always enjoyed and been
            driven to find solutions and create sustainable methods to prevent future errors. Being a frontend developer
            I&apos;m able to do the things I really like to do - be creative, organise and create reliable methods.
          </p>
        </div>
      </div>
      <img className="arrow-icon desktop-arrow" src="icons/arrow.svg" alt="an arrow" />
    </section>
  );
};
