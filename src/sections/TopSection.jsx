import { Headline } from "../components/Headline/Headline";
import { Image } from "../components/Image/Image";
import arrow from "/icons/arrow.svg";
import "./TopSection.css";

export const TopSection = () => {
  return (
    <div className="header-div">
      <Image
        className="profile-picture"
        link="/images/Portrait_BW.png"
        altText="profile picture"
      />
      <h2>Hi, I'm Viktoria Olofsson</h2>
      <Headline headlineStyle="profile-headline" headline="Web Developer" />

      <p>
        Viktoria is a Front-End/Back-End Developer with a background in
        translation. She creates user-friendly applications and solves complex
        issues with ease. Her attention to detail, curiosity for learning new
        things, and passion for solving puzzles make her a valuable asset to
        any project.
      </p>
      <div className="arrow-div">
        <img src={arrow} alt="downward arrow" />
      </div>
    </div>
  );
};
