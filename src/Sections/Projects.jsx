import { useEffect, useState } from "react";
import { Headline } from "./Headline";
import { ProjectCard } from "../components/ProjectCard";
import { Tag } from "../components/Tag";
import projects from "../../projects.json";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="project-card2">
      <Headline
        text="Featured Projects"
        className="featured-projects"
        level={1}
      />
      {projects.projects.map((project) => (
        <ProjectCard
          key={project.name}
          name={project.name}
          photo={project.image}
          tags={project.tags}
          text={project.text}
          links={{ netlify: project.netlify, github: project.github }}
        />
      ))}
    </div>
  );
};

// export const Projects = () => {
//   const [githubProjects, setGithubProjects] = useState([]);

//   useEffect(() => {
//     // Fetch GitHub projects data
//     fetch("https://api.github.com/users/FridafridaL/repos")
//       .then((res) => res.json())
//       .then((data) => setGithubProjects(data));
//   }, []);

//   return (
//     <>
//       <Headline text="Featured Projects" level={1} />
//       {githubProjects.map((project) => (
//         <ProjectCard
//           key={project.name}
//           name={project.name}
//           photo={process.env.PUBLIC_URL + "/Images/img.png"} // Set the image path
//           tags={project.tags.map((tag) => (
//             <Tag key={tag} tagItem={tag} /> // Use the Tag component here
//           ))}
//         />
//       ))}
//     </>
//   );
// };
