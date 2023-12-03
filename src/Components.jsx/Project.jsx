import React from "react";
import { LinkButton } from "./LinkButton";
import { Tag } from "./Tag";
import projectsData from "./projects.json";
import "./Project.css";

export const Project = ({ project }) => {
  const { name, image, description, tags, github_url, deployed_page_url } =
    project;
  return (
    <>
      <div className="project-container">
        {/* <img className="project-pic" src={image} alt={name} /> */}

        <div className="project-text">
          <h4>{name}</h4>
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
      </div>
    </>
  );
};
