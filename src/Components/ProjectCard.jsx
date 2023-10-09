// Det enskilda kortet
//props:
// html_url
// description
// homepage
// topics
// id (project)
// name

import React from "react";
import { ProjectTopics } from "./ProjectTopics";

export const ProjectCard = ({ project }) => {
  console.log(project.topics);
  return (
    <div className="project-card" key={project.id}>
      <div className="project-image">
        {/* bilder med project.id som filnamn  */}
        <img src={"/assets/" + project.id + ".png"} alt="" />
      </div>
      <div className="project-info">
        <h2 className="project-name">{project.name}</h2>
        <p className="project-description">{project.description}</p>
        <ProjectTopics topics={project.topics} />
      </div>
    </div>
  );
};
