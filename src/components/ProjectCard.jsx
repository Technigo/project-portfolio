import { Photo } from "./Photo";
import "./ProjectCard.css";
import { Links } from "./Links";

export const ProjectCard = ({ name, photo, tags, text }) => {
  return (
    <div className="project-card">
      <Photo source={photo} color="blue" mode="square" />
      <h2>{name}</h2>
      <p className="project-text">{text}</p>
      <div className="tags">
        {tags.map((tag) => (
          <p key={tag.id} className="tag">
            {tag.name}
          </p>
        ))}

        <Links />
      </div>
    </div>
  );
};

// export const ProjectCard = () => {
//   const projectTitle = "Project Title";
//   const projectText =
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, recusandae molestias vitae pariatur eius...";
//   const tagArray = ["HTML5", "CSS3", "React", "Node"];
//   const projectLiveLink = "Netlify";
//   const gitHubLink = "GitHub";

//   return (
//     <div className="project-card">
//       <div className="project-photo">
//         <Photo />
//       </div>

//       <div className="project-info">
//         <h2>{projectTitle}</h2>
//         <p>{projectText}</p>
//         <div className="tag-container">
//           {tagArray.map((item) => (
//             <Tag key={item} tagItem={item} />
//           ))}
//         </div>

//         <div className="buttons">
//           <button link={projectLiveLink}>Live Demo</button>
//           <button link={gitHubLink}> Github </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// import Links from "./Links";

// export const ProjectCard = [
//   { text: "Live Demo 1", url: "https://demo1.com", icon: "demo1-icon.png" },
//   { text: "Live Demo 2", url: "https://demo2.com", icon: "demo2-icon.png" },
//   // Add more buttons as needed
// ];

// const ProjectCard = () => {
//   return (
//     <div>
//       {/* Other content for the "Featured Work" section */}
//       <Links buttons={featuredWorkButtons} />
//     </div>
//   );
// };
