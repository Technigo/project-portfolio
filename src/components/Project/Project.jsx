// /* eslint-disable react/jsx-key */
// /* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Button } from "../../components/Button";
import finalProject from "../../assets/final-project.png";
import chatbot from "../../assets/chatbot.png";
import music from "../../assets/music.png";
import qrcode from "../../assets/qrcode.png";
import weather from "../../assets/weather.png";
import quiz from "../../assets/quiz.png";
import liveDemoImage from "../../assets/LiveDemo.svg";
import githubImage from "../../assets/github.svg";
import "./Project.css";

export const Project = ({
  title,
  description,
  tags,
  id,
  gitLink,
  deployedLink,
}) => {
  console.log(title);
  let imagedirectory;
  console.log(title);
  switch (title) {
    case "Final-project":
      imagedirectory = finalProject;
      break;
    case "Project-chatbot":
      imagedirectory = chatbot;
      break;
    case "Project_Music_Releases_vite":
      imagedirectory = music;
      break;
    case "Project-QR-code-generator":
      imagedirectory = qrcode;
      break;
    case "Project_Weather_app":
      imagedirectory = weather;
      break;
    case "Project-Quiz":
      imagedirectory = quiz;
      break;
  }

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="project-container">
      <img src={imagedirectory} className="project-image" alt="project-image" />
      <div className="text-container">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        <div className="tags-container">
          {tags.map((tag) => {
            return (
              <p key={`${id} ${tag}`} className="tag">
                <span className="w3-tag">{tag}</span>
              </p>
            );
          })}
        </div>
        <Button
          type="live-demo"
          text="Live Demo"
          onClick={() => handleClick(deployedLink)}
          iconSrc={liveDemoImage}
          iconAlt="An icon of a globe"
          href={deployedLink}
        />
        <Button
          type="view-code"
          text="View the Code"
          href={gitLink}
          onClick={() => handleClick(gitLink)}
          iconSrc={githubImage}
          iconAlt="An icon of GitHub"
        />
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  gitLink: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
};
