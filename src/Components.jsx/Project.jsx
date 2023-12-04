import React from "react";
import { LinkButton } from "./LinkButton";
import { Tag } from "./Tag";
import projectsData from "./projects.json";
import "./Project.css";

export const Project = ({ projects }) => {
  console.log(projectsData);
  const { name, image, description, tags, github_url, deployed_page_url } =
    projects;
  return (
    <>
      <div className="project-container">
        <h1>Projects</h1>

        {projects.map((project, index) => (
          <div className="project-text" key={index}>
            <p>{name}</p>
            <p>{description}</p>
            {/* <div className="tag-container">
              {tags.map((item) => (
                <Tag key={item} tag={item} />
              ))}
            </div> */}
            <div className="button-container">
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
