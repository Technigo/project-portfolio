import React from "react";
import "./ProjectCard.css";
import githubIcon from "../assets/images/github.svg";
import livedemoIcon from "../assets/images/live-demo.svg";
import defaultImage from "../assets/images/default-project-image.png";

// Function to capitalize the first letter of each word
const capitalizeFirstLetter = (string) => {
  return string.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const ProjectCard = ({ repo, imageUrl }) => {
  const imageSrc = imageUrl ? imageUrl : defaultImage;

  // Replace "-" with an empty space in the project name and capitalize first letter
  const formattedProjectName = capitalizeFirstLetter(
    repo.name.replace(/-/g, " ")
  );

  const handleLiveDemoClick = () => {
    window.location.href = repo.homepage;
  };

  const handleViewCodeClick = () => {
    window.location.href = repo.html_url;
  };

  return (
    <div className="project-card-container">
      <img src={imageUrl} alt={repo.name} className="mockup-image" />
      <div className="project-content">
        <h3 className="project-name">{formattedProjectName}</h3>
        <p className="project-description">
          {repo.description
            ? repo.description
            : "A detailed description of this project is currently being crafted and will be available soon."}
        </p>
        <div className="project-tags-container">
          {repo.topics.map((topic, index) => (
            <p key={index}>{topic}</p>
          ))}
        </div>
        <div className="button-container">
          <button onClick={handleLiveDemoClick}>
            <img src={livedemoIcon} alt="Live Demo Icon" className="icon" />
            Live demo
          </button>
          <button onClick={handleViewCodeClick}>
            <img src={githubIcon} alt="GitHub Icon" className="icon" />
            View the code
          </button>
        </div>
      </div>
    </div>
  );
};
