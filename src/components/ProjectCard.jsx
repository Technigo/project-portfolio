import React from "react";
import "./ProjectCard.css";
import Heading from "./Heading";

export const ProjectCard = ({ repo }) => {
  // Replace "-" with an empty space in the project name
  const formattedProjectName = repo.name.replace(/-/g, " ");

  return (
    <div className="project-card-container">
      <Heading text="Featured Projects" />
      <h3 className="project-name">{formattedProjectName}</h3>
      <p className="project-description">{repo.description}</p>
      <div className="project-tags-container">
        {repo.topics.map((topic, index) => (
          <p key={index}>{topic}</p>
        ))}
      </div>
      <a href={repo.homepage}>Live demo</a>
      <a href={repo.html_url}>View the code</a>
    </div>
  );
};
