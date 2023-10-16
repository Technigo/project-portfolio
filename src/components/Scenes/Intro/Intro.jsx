import "./Intro.css";
import { ProfileImage } from "../../ProfileImage/ProfileImage";
import { FaArrowDownLong } from "react-icons/fa6";

export const Intro = () => {
  return (
    <section id="intro" aria-label="Introduction section">
      <div className="page-wrapper">
        <ProfileImage />
        <div className="profile-headings">
          <p className="profile-subtitle">
            Hi, <span>I'm Julia Holm</span>
          </p>
          <h1 className="profile-title">Frontend Developer</h1>
        </div>
        <div className="profile-text">
          <p className="p-text">
            Julia is an exceptional developer known for her innovative solutions
            and exceptional coding abilities. She creates user-friendly
            applications and solves complex issues with ease. Her drive for
            excellence makes her a valuable asset to any project and a standout
            in the technology field.
          </p>
        </div>
        <FaArrowDownLong
          className="arrow-down"
          aria-label="Scroll down to learn more"
        />
      </div>
    </section>
  );
};
