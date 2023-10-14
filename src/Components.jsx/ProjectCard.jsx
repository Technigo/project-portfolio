import React, { useState, useEffect } from "react";
import { LinkButton } from "./LinkButton";
import { Tag } from "./Tag";

import "./ProjectCard.css";

export const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/EmmyLJ/repos")
      .then((response) => response.json()) // Add parentheses to call json()
      .then((data) => setData(data));
  }, []);

  return (
    <div className="Projects">
      <h1>Featured projects</h1>
      {data.map((project) => (
        <ProjectCard
          key={project.id}
          projectTitle={project.name}
          projectText={project.description}
          tagArray={project.topics}
          projectLiveLink="Netlify" // This should be replaced with the actual link
          gitHubLink="https://api.github.com/users/EmmyLJ/repos"
        />
      ))}
    </div>
  );
};

export const ProjectCard = ({
  projectTitle,
  projectText,
  tagArray,
  projectLiveLink,
  gitHubLink,
}) => {
  return (
    <div className="project-card">
      <div className="project-photo">
        {/* You may render the project photo here */}
      </div>

      <div className="project-info">
        <h2>{projectTitle}</h2>
        <p>{projectText}</p>
        <div className="tag-container">
          {tagArray.map((item) => (
            <Tag key={item} tagItem={item} />
          ))}
        </div>

        <div className="buttons">
          <LinkButton buttonText="Live Demo" url={projectLiveLink} />
          <LinkButton buttonText="GitHub" url={gitHubLink} />
        </div>
      </div>
    </div>
  );
};
