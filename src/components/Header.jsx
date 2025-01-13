import profilePic from "../assets/profile_pic.png";
import styles from "./Header.module.css";
import { BtnArrow } from "./buttons/Buttons";
import githubIcon from "../assets/Icon-github.svg";
import IconLinkedin from "../assets/Icon-linkedin.svg";

export const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className="flex-row">
          <img
            className="profile-pic picMobile"
            src={profilePic}
            alt="profile-picuture"
          />
          <div className="flex-row iconsMobile">
            <a href="https://github.com/vidalhuix" target="_blank">
              <img className="iconsMobile" src={githubIcon} alt="github-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/arnau-vidal-4266a940/"
              target="_blank"
            >
              <img
                className="iconsMobile"
                src={IconLinkedin}
                alt="icon linkedin"
              />
            </a>
          </div>
        </div>
        <div>
          <h1 className={styles.profession}>Frontend Developer</h1>
        </div>
        <div className="flex-column ">
          <div className="flex-row ">
            <img
              className="profile-pic picOthers"
              src={profilePic}
              alt="profile-picuture"
            />
            <div className="align-center picOthers">
              <a href="https://github.com/vidalhuix" target="_blank">
                <img src={githubIcon} alt="github-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/arnau-vidal-4266a940/"
                target="_blank"
              >
                <img src={IconLinkedin} alt="icon linkedin" />
              </a>
            </div>
          </div>
          <div>
            <h2>Hi 👋, I'm Arnau Vidal</h2>

            <p>
              A web developer on a continuous learning journey. Trained in
              modern JavaScript and React with a basic knowledge of PHP and
              Laravel. I have full-stack ambitions and a strong background in
              architecture.
            </p>
          </div>
        </div>
        <BtnArrow />
      </div>
    </div>
  );
};
