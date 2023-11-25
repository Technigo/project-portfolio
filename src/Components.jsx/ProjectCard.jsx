import React, { useState, useEffect } from "react";
import { LinkButton } from "./LinkButton";
import { Tag } from "./Tag";
import data from "./projects.json";
import "./ProjectCard.css";

const projects = data.projects || [];
projects.forEach((project) => {
  const projectName = project.projectName || "";
  const description = project.description || "";
  const deployed_page_url = project.deployed_page_url || "";
  const github_url = project.github_url || "";
});

export const ProjectCard = ({
  projectName,
  description,
  tagArray,
  deployed_page_url,
  github_url,
}) => {
  return (
    <div className="Projects">
      <h1>Featured projects</h1>
      <div className="project-card">
        <div className="project-photo">{/* Maybe a project photo here */}</div>

        <div className="project-info">
          <h2>{projectName}</h2>
          <p>{description}</p>
          <div className="tag-container">
            {/* Iterate over tagArray and render each tag */}
            {tagArray.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
          <p>
            Deployed Page URL:{" "}
            <a href={deployed_page_url}>{deployed_page_url}</a>
          </p>
          <p>
            GitHub URL: <a href={github_url}>{github_url}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

//         <div className="buttons">
//           <LinkButton
//             buttonText=""
//             url="https://app.netlify.com/" // Add the path to the specific deploy
//             icon="./src/Icons/Live-Demo-Button.png" // Add the path to the icon image
//           />
//           <LinkButton
//             buttonText=""
//             url="https://github.com/EmmyLJ/"
//             icon="./src/Icons/View-Code-Button.png"
//           />
//         </div>
//         <div className="Path">
//           <img src="./src/Icons/path.png" />
//         </div>
//       </div>
//     </div>
//   </div>
// );
// };
