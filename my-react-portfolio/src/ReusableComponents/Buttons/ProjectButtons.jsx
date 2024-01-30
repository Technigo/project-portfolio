
import "./projectbuttons.css"

export const ProjectButtons = ({ project }) => {
  return (
    <>
      <div className="netlifyButton common-button">
        <a href={project.netlify} target="_blank" rel="noreferrer">
          <button type="button" className="show-more-button" aria-label="live demo">
            <img src="my-react-portfolio/src/assets/icons/live-demo.svg" alt="Live demo" />
            <p>Live demo</p>
          </button>
        </a>
      </div>
      <div className="githubButton common-button">
        <a href={project.github} target="_blank" rel="noreferrer">
          <button type="button" className="show-more-button" aria-label="View the code">
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