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
    <div>
      {data.map((response) => (
        <ProjectCard
          key={response.id}
          projectTitle={response.name}
          projectText={response.description}
          tagArray={response.topics}
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
    <div className="Projects">
      <h1>Featured projects</h1>
      <div className="project-card">
        <div className="project-photo">
          {/* You may render the project photo here */}
        </div>

        <div className="project-info">
          <h2>{projectTitle}</h2>
          <p>{projectText}</p>
          <div className="tag-container">
            {/* {tagArray.map((item) => (
            <Tag key={item} tagItem={item} />
          ))} */}
          </div>

          <div className="buttons">
            <LinkButton
              buttonText="Live Demo"
              url="https://app.netlify.com/" // Add the path to the specific deploy
              icon="Live.Demo-Button.png" // Add the path to the icon image
            />
            <LinkButton
              buttonText="View the Code"
              url="https://github.com/EmmyLJ/"
              icon="View-Code-Button.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
