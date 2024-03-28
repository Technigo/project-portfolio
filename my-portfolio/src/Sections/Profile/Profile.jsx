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
          src="../src/assets/Martin-square.jpg"
          alt="Martin Jönsson"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          possimus iure expedita labore alias laborum voluptatum est quasi sint?
          Praesentium, ea, porro excepturi doloribus debitis eveniet quos quidem
          vitae impedit dolorum nam? Accusantium magni aut ipsum, dicta sunt,
          nisi aspernatur, quaerat doloremque sit officiis magnam velit sint?
          Blanditiis, voluptate facilis?
        </p>
      </div>
      <div className="profile-arrow">
        <img className="arrow" src={arrowImage} alt="Down arrow"></img>
      </div>
    </div>
  );
};
