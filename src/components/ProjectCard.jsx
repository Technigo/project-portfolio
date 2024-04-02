import React from "react";
import "./ProjectCard.css";
import githubIcon from "../assets/images/github.svg";
import livedemoIcon from "../assets/images/live-demo.svg";
import mockupImage from "../assets/images/default-project-image.png";

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
      <img src={mockupImage} alt="Mockup image" className="mockup-image" />
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

//   return (
//     <div className="project-card-container">
//       <img src={mockupImage} alt="Mockup image" className="mockup-image" />
//       <div className="project-content">
//         <h3 className="project-name">{formattedProjectName}</h3>
//         <p className="project-description">{repo.description}</p>
//         <div className="project-tags-container">
//           {repo.topics.map((topic, index) => (
//             <p key={index}>{topic}</p>
//           ))}
//         </div>
//         <div className="button-container">
//           <button onClick={handleLiveDemoClick}>
//             <img src={livedemoIcon} alt="Live Demo Icon" className="icon" />
//             Live demo
//           </button>
//           <button onClick={handleViewCodeClick}>
//             <img src={githubIcon} alt="GitHub Icon" className="icon" />
//             View the code
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
