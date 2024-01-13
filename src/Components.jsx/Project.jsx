import React from "react";
import { LinkButton } from "./LinkButton";
import { Tag } from "./Tag";
import projectsData from "./projects";
import "./Project.css";
import "./Tag.css";

export const Project = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="project-container">
        {projectsData.projects.map((project, index) => {
          const {
            name,
            image,
            description,
            tags,
            github_url,
            deployed_page_url,
          } = project;

          return (
            <div className="project-card" key={index}>
              <h3>{name}</h3>
              <p>{description}</p>
              <img className="project-images" src={image} alt={name} />
              <div className="tag-container">
                {tags &&
                  Array.isArray(tags) &&
                  tags.map((item) => (
                    <Tag className="tag" key={item} tagText={item} />
                  ))}
              </div>
              <div className="button-container">
                <LinkButton url={deployed_page_url} buttonText="Live demo" />
                <LinkButton url={github_url} buttonText="View the code" />
              </div>
            </div>
          );
        })}
      </div>
      <img className="divider" src="../public/divider.png" />
    </>
  );
};
