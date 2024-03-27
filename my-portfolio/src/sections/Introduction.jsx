import { Headline } from "../components/Headline.jsx";

export const Introduction = () => {
  return (
    <section className="introduction-container">
      <img className="profile-img" src="src/assets/porfileImg.jpg" alt="profile image of Maja" />
      <div>
        <Headline style="sub-header common-text-styles" title="Hi, I'm Maja Schouenke" />
        <Headline style="title text common-text-styles" title="Frontend Developer" />
      </div>
    </section>
  );
};
