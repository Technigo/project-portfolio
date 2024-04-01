import { Headline } from "../components/Headline.jsx";

export const Introduction = () => {
  return (
    <section className="intro-container">
      <img className="profile-img" src="src/assets/profileImg.jpg" alt="profile image of Maja" />
      <div className="intro-header-box">
        <Headline style="name-title" title="Hi, I'm Maja Schouenke" />
        <Headline style="intro-title" title="Frontend Developer" />
      </div>
      <div className="intro-text-box">
        <p>Presentational text</p>
      </div>
      <img className="arrow-icon" src="src/assets/icons/arrow.svg" alt="an arrow" />
    </section>
  );
};
