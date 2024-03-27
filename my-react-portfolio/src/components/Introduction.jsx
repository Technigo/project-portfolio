import { FaArrowDownLong } from "react-icons/fa6";

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
          Etna is an exceptional developer known for her innovative solutions
          and exceptional coding abilities. She creates user-friendly
          applications and solves complex issues with ease. Her drive for
          excellence makes her a valuable asset to any project and a standout in
          the technology field.
        </p>
      </div>
      <button onClick={scrollToTech}>
        <FaArrowDownLong color="#FF4575" size={34} />
      </button>
    </div>
  );
};

export default Introduction;
