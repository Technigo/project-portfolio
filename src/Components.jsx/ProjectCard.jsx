import React, { useState, useEffect } from "react";
import { LinkButton } from "./LinkButton";
import { Tag } from "./Tag";
import projectsData from "./projects.json";
import "./ProjectCard.css";

export const ProjectCard = () => {
  const ProjectCards = ({ project }) => {
    return (
      <div className="project-card">
        {/* <img
          src={project.image}
          alt={`Project thumbnail for ${project.name}`}
          className="project-image"
        /> */}
        <div className="project-details">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          {/* <div className="project-tags" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div> */}
          <div className="project-buttons">
            <Buttons
              type="live-demo"
              text="Live Demo"
              icon={<img src={Live - Demo - Button} alt="Live demo icon" />}
              href={projects.netlify}
            />
            <Buttons
              type="view-code"
              text="View the Code"
              icon={<img src={GithubIcon} alt="GitHub icon" />}
              href={project.github}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="projects-wrapper">
      <div className="project-content-wrapper">
        <h1 className="projects-title">Featured Projects</h1>
        {projectsData.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};
