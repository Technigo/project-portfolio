import { Photo } from "./Photo";
import "./ProjectCard.css";
import { Links } from "./Links";

// export const ProjectCard = ({ name, photo, tags, text, links }) => {
//   return (
//     <div className="project-card">
//       <div className="project-photo-box">
//         <Photo source={photo} color="blue" mode="square" />
//       </div>
//       <div className="project-card-info">
//         <h2>{name}</h2>
//         <p className="project-text">{text}</p>
//         <div className="tags">
//           {tags.map((tag) => (
//             <p key={tag.id} className="tag">
//               {tag.name}
//             </p>
//           ))}
//         </div>

//         <Links project={links} />
//       </div>
//     </div>
//   );
// };

export const ProjectCard = ({ name, photo, tags, text, links }) => {
  return (
    <div className="project-card">
      <div className="project-photo-box">
        <Photo
          source={photo}
          color="blue"
          mode="square"
          className="projectcard-photo"
        />
      </div>
      <div className="project-card-info">
        <h2>{name}</h2>
        <p className="project-text">{text}</p>
        <div className="tags">
          {tags.map((tag) => (
            <p key={tag.id} className="tag">
              {tag.name}
            </p>
          ))}
        </div>

        <Links netlify={links.netlify} github={links.github} />
      </div>
    </div>
  );
};
