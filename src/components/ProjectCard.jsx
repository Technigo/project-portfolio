import React from "react";
import { projects } from "../Data";
import { LinkBtns } from "./LinkBtns";

export const ProjectCard = () => {
  return (
    <div className="projects-container">
      {projects.map(
        ({ id, title, description, image, github_url, demo_url }) => {
          return (
            <div className="project-item card" key={id}>
              <img src={image} alt="" />
              <div className="hej">
                <div className="text">
                  <h3 className="title-cs project-title">{title}</h3>
                  <p className="text-cs">{description}</p>
                </div>
                <LinkBtns github_url={github_url} demo_url={demo_url} />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
