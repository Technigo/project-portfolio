import React from "react";
import "./ProjectCard.css";

export const ProjectCard = ({ repo }) => {
  return (
    <div className="project-card-container">
      <h2 className="project-heading">{repo.name}</h2>
      <p className="project-description">{repo.description}</p>
      <div className="project-tags-container">
        {repo.topics.map((topic, index) => (
          <p key={index}>{topic}</p>
        ))}
      </div>
      <a href={repo.html_url}>View the code</a>
    </div>
  );
};
