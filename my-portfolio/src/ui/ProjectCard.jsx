/* eslint-disable react/prop-types */
import { Heading } from "./Heading";
import { Button } from "./Button";
import webIcon from "../assets/Web_Icon.svg";
import gitHubIcon from "../assets/Github_Icon.svg";
import "./ProjectCard.css";

export const ProjectCard = ({
  image,
  tags,
  title,
  description,
  button1Link,
  button2Link,
}) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <div className="tags">
          {tags.map((tag, index) => (
            <button key={index} className="project-tag-button">
              {tag}
            </button>
          ))}
        </div>

        <div className="project-info">
          <Heading heading={title} level={3} className="project-title" />
          <p className="project-description">{description}</p>
          <div className="buttons">
            <Button
              text="Live Demo"
              onClick={() => window.open(button1Link, "_blank")}
              icon={webIcon} // This should be the web icon for "Live Demo"
            />
            <Button
              text="View Code"
              onClick={() => window.open(button2Link, "_blank")}
              icon={gitHubIcon} // This should be the GitHub icon for "View Code"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
