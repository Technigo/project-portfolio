
import { TagComponent } from "../TagComponent";
import { ProjectHeadline } from "./ProjectHeadline";

import project1 from "../../assets/article1.png"; 
import project2 from "../../assets/article2.png";
import project3 from "../../assets/article3.png"; 
import project4 from "../../assets/article4.png"; 
import project5 from "../../assets/article4.png"; 
import project6 from "../../assets/article4.png"; 

export const ProjectCard = ({ repo }) => {

  // add images

  return (
    <div className="project-card-wrapper">
      <img src="" alt="Project Image" />
      <div className="project-description">
        <ProjectHeadline repo={repo} />
        <div className="project-tags">
          {repo.topics.map((topic, index) => (
            <span key={index}>
              <TagComponent tag={topic} />
            </span>
          ))}
        </div>
        <div className="project-buttons">
          <button>test</button>
        </div>
      </div>
    </div>
  );
};




