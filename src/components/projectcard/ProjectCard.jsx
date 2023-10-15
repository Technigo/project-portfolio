import "./project-card.css";
import demodark from "../../assets/demodark.svg";
import githubdark from "../../assets/githubdark.svg";
import survey from "../../assets/pexels-lukas-590022.jpg";
import portfolio from "../../assets/clark-tibbs-oqStl2L5oxI-unsplash.jpg";
import happyThoughts from "../../assets/madison-oren-uGP_6CAD-14-unsplash.jpg";
import weather from "../../assets/johannes-plenio-600dw3-1rv4-unsplash.jpg";
import music from "../../assets/heidi-fin-H4fYXZ1hyco-unsplash.jpg";

import { Tags } from "./Tags.jsx";

export const ProjectCard = ({
  title,
  description,
  gitLink,
  deployedLink,
  tags,
}) => {
  // console.log(title);
  // console.log(description);
  // console.log(gitLink);
  // console.log(deployedLink);
  // console.log(tags);
  let imagedirectory;
  console.log(title);
  switch (title) {
    case "Portfolio-Project":
      imagedirectory = portfolio;
      break;
    case "Happy-Thoughts-Project":
      imagedirectory = happyThoughts;
      break;
    case "Survey-Project":
      imagedirectory = survey;
      break;
    case "Music-Releases-Project":
      imagedirectory = music;
      break;
    case "Weather-App-Project":
      imagedirectory = weather;
      break;
  }

  return (
    <div className="project-card">
      <img src={imagedirectory} className="project-image" alt="project-image" />

      <div className="project-data">
        <h2 className="project-title">{title}</h2>
        <p className="project-description"> {description}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <Tags key={tag} tagInfo={tag} />
          ))}
        </div>
        <div className="buttons">
          <button className="deployedBtn" href={deployedLink}>
            <img src={demodark} alt="globe-icon-dark" />
            Live Demo
          </button>
          <button className="gitBtn" href={gitLink}>
            <img src={githubdark} alt="github-icon-dark" />
            View the code
          </button>
        </div>
      </div>
    </div>
  );
};
