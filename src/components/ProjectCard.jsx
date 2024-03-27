import React from "react";
import "./ProjectCard.css";
import githubIcon from "../assets/images/github.svg";
import livedemoIcon from "../assets/images/live-demo.svg";

export const ProjectCard = ({ repo }) => {
  // Replace "-" with an empty space in the project name
  const formattedProjectName = repo.name.replace(/-/g, " ");

  const handleLiveDemoClick = () => {
    window.location.href = repo.homepage;
  };

  const handleViewCodeClick = () => {
    window.location.href = repo.html_url;
  };

  return (
    <div className="project-card-container">
      <h3 className="project-name">{formattedProjectName}</h3>
      <p className="project-description">{repo.description}</p>
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
  );
};

// import React from "react";
// import "./ProjectCard.css";

// export const ProjectCard = ({ repo }) => {
//   // Replace "-" with an empty space in the project name
//   const formattedProjectName = repo.name.replace(/-/g, " ");

//   return (
//     <div className="project-card-container">
//       <h3 className="project-name">{formattedProjectName}</h3>
//       <p className="project-description">{repo.description}</p>
//       <div className="project-tags-container">
//         {repo.topics.map((topic, index) => (
//           <p key={index}>{topic}</p>
//         ))}
//       </div>
//       <div className="button-container">
//         <button>
//           <a href={repo.homepage}>Live demo</a>
//         </button>
//         <button>
//           <a href={repo.html_url}>View the code</a>
//         </button>
//       </div>
//     </div>
//   );
// };
