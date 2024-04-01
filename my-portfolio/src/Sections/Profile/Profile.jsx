import arrowImage from "/Arrow2.svg";
import "./profile.css";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-title">
        <h2>Hi, I&apos;m Martin Jönsson</h2>
        <h1>Frontend Developer</h1>
      </div>
      <div className="profile-info">
        <img
          className="profile-picture"
          src="./Martin-square.jpg"
          alt="Martin Jönsson"
        />
        <p>
          With a strong foundation in research and teaching, I bring a unique
          perspective to solving complex problems and communicating technical
          concepts clearly. My analytical skills and passion for education now
          fuel my journey into crafting intuitive and accessible web
          experiences.
        </p>
      </div>
      <div className="profile-arrow">
        <img className="arrow" src={arrowImage} alt="Down arrow"></img>
      </div>
    </div>
  );
};
