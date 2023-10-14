// import { MainHeading } from "../MainHeading/MainHeading";
import "./Introduction.css";

export const Introduction = () => {
  const introText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <section className="intro-section">
      <div className="info-wrapper">
        <img
          className="profile-pic"
          src="/assets/profile.jpeg"
          alt="Profile picture of Inna"
        />
        <div className="name-headline-wrapper">
          <h3 className="my-name">Hi, I&apos;m Inna Kokic</h3>
          <h2 className="job-title">Frontend Developer</h2>
        </div>
        <p className="introText">{introText}</p>
      </div>

      <div className="arrow jump">
        <img
          className="vert-move"
          src="/assets/Position=down.svg"
          alt="down arrow icon"
        />
      </div>
    </section>
  );
};
