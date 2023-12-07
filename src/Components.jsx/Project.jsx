import React from "react";
import { LinkButton } from "./LinkButton";
import { Tag } from "./Tag";
import projectsData from "./projects";
import "./Project.css";

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
              {/* Assuming you have an 'image' property in your project data */}
              <img src={image} alt={name} />
              {/* Uncomment the following lines if you have a 'tags' property in your project data */}
              {/* <div className="tag-container">
                {tags.map((item) => (
                  <Tag key={item} tag={item} />
                ))}
              </div> */}
              {/* <div className="button-container"> */}
              <LinkButton
                url={deployed_page_url}
                text="Live demo"
                hovColor="netlify"
              />
              <LinkButton
                url={github_url}
                text="View the code"
                hovColor="github"
              />
              {/* </div> */}
            </div>
          );
        })}
      </div>
    </>
  );
};
