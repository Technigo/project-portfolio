// import "./projectbuttons.css";
// import blackLiveDemoIcon from "/src/assets/icon/live-demo-black.svg";
// import whiteLiveDemoIcon from "/src/assets/icon/live-demo-white.svg";
// import blackGitHubIcon from "/src/assets/icon/github-black.svg";
// import whiteGitHubIcon from "/src/assets/icon/github-white.svg";

// export const ProjectButtons = ({ project, isBlue }) => {
//   console.log(isBlue)
//   // Determine which icons to use based on the button's state
//   const liveDemoIcon = isBlue ? whiteLiveDemoIcon : blackLiveDemoIcon;
//   const githubIcon = isBlue ? whiteGitHubIcon : blackGitHubIcon;

//   return (
//     <>
//       <div className="netlifyButton common-button">
//         <a href={project.netlify} target="_blank" rel="noreferrer">
//           <button
//             type="button"
//             className={`show-more-button ${isBlue ? 'blue' : ''}`}
//             aria-label="live demo"
//           >
//             <img src={liveDemoIcon} alt="" />
//             <p>Live demo</p>
//           </button>
//         </a>
//       </div>
//       <div className="githubButton common-button">
//         <a href={project.github} target="_blank" rel="noreferrer">
//           <button
//             type="button"
//             className={`show-more-button ${isBlue ? 'blue' : ''}`}
//             aria-label="View the code"
//           >
//             <img src={githubIcon} alt="" />
//             <p>View the code</p>
//           </button>
//         </a>
//       </div>
//     </>
//   );
// };

import "./projectbuttons.css";
import blackLiveDemoIcon from "/src/assets/icon/live-demo-black.svg";
import blackGitHubIcon from "/src/assets/icon/github-black.svg";

export const ProjectButtons = ({ project }) => {
  return (
    <>
      <div className="netlifyButton common-button">
        <a href={project.netlify} target="_blank" rel="noreferrer">
          <button
            type="button"
            className="show-more-button"
            aria-label="live demo"
          >
            <img src={blackLiveDemoIcon} alt="" />
            <p>Live demo</p>
          </button>
        </a>
      </div>
      <div className="githubButton common-button">
        <a href={project.github} target="_blank" rel="noreferrer">
          <button
            type="button"
            className="show-more-button"
            aria-label="View the code"
          >
            <img src={blackGitHubIcon} alt="" />
            <p>View the code</p>
          </button>
        </a>
      </div>
    </>
  );
};




// export const ProjectButtons = ({ project }) => {
//   return (
//     <div className="project-wrapper">
//       <div className="button-wrapper">

//         <a href={project.github}>
//           <button role="button" tabIndex="0" onClick={() => window.location = project.github}>
//             <img src={project.githubBtn} alt="Github Link to project" aria-label="View on GitHub" />
//           </button>
//         </a>
//         <a href={project.netlify}>
//           <button role="button" tabIndex="0" onClick={() => window.location = project.netlify}>
//             <img src={project.liveDemoBtn} alt="Netlify Link to project" aria-label="View live demo on Netlify" />
//           </button>
//         </a>

//       </div>
//     </div>
//   );
// };