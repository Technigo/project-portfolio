import React from "react";
import "./ProjectCard.css";

export const ProjectCard = ({ repo }) => {
  // Format the project name to remove hyphens and capitalize the first letter
  const formattedName = repo.name
    .replace(/-/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase());

  return (
    <div className="project-card-container">
      <h2 className="project-heading">{formattedName}</h2>
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
