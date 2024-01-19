import Headlines from "../Components/Headlines";
import Profile from "../Components/Profile";
import arrow from "../assets/arrow.json";
import Lottie from "lottie-react";
import "/src/index.css";

export const Introduction = () => {
  const style = { height: 100 };
  return (
    <div className="intro-wrapper">
      <div className="intro">
        <h1 className="intro-subtitle">
          Hi, I'm Janice Cheng
          <Headlines title="Frontend Developer" />
        </h1>

        <div className="intro-content">
          <Profile />
          <p>
            I am a dynamic professional with a marketing background and four
            years in retail management. Motivated by a deep interest in
            technology, I've expanded my skills into project management, UX
            design, and front-end development. Known for my self-initiative, I
            excel in team environments and am dedicated to staying ahead through
            continuous learning. My unique blend of experience, curiosity, and
            adaptability positions me as an enthusiastic contributor to the
            dynamic realm of full-stack design.
          </p>
        </div>
      </div>

      <div className="arrow">
        <Lottie animationData={arrow} style={style} />
      </div>
    </div>
  );
};
export default Introduction;
