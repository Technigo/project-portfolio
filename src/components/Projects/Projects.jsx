import React from "react";
import { Headline } from "../Headline/Headline";
import ProjectsData from "../../../projects.json";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="projects-container">
      <Headline className="headline" text="Featured Projects" level={1} />
      {ProjectsData.projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
};
