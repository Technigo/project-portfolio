import { FaArrowDownLong } from "react-icons/fa6";
import PropTypes from "prop-types";

const Introduction = ({ scrollToTech }) => {
  return (
    <div className="intro-element">
      <div className="intro-container">
        <span className="intro-main-header">Hello, I am Etna Zuñiga</span>
        <span className="intro-second-header">Frontend Developer</span>
      </div>
      <div className="intro-paragraph">
        <img className="intro-image" src="./photo.jpg" alt="Avatar" />
        <p className="intro-text">
          I am a developer known for my eager to learn and innovative solutions
          with exceptional coding abilities. I develop user-friendly
          applications and solves complex issues with ease. Am highly
          responsible with sefl-drive that makes me valuable asset to any
          project and a standout in the technology field.
        </p>
      </div>
      <button onClick={scrollToTech}>
        <FaArrowDownLong color="#FF4575" size={34} />
      </button>
    </div>
  );
};

Introduction.propTypes = { scrollToTech: PropTypes.func.isRequired };

export default Introduction;
