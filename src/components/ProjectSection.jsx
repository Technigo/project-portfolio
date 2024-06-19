import React from "react";
import "./ProjectSection.css";
import { Heading } from "./Heading";
import { ProjectCard } from "./ProjectCard";

export const ProjectSection = ({ repositories }) => {
  return (
    <div className="repositories-container">
      <Heading text="Featured Projects" />
      {repositories.map((repo) => (
        <ProjectCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

// import React, { useState, useEffect } from "react";
// import "./ProjectSection.css";
// import { Heading } from "./Heading";
// import { ProjectCard } from "./ProjectCard";

// export const ProjectSection = () => {
//   const [repositories, setRepositories] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchRepositories();
//   }, []);

//   const fetchRepositories = async () => {
//     const URL = "https://api.github.com/users/JohannaBN/repos";

//     try {
//       const response = await fetch(URL);
//       if (!response.ok) {
//         throw new Error("Could not load repositories");
//       }
//       const data = await response.json();
//       // Sort the repositories based on the created_at date with newest first
//       const sortedRepositories = data.sort(
//         (a, b) => new Date(b.created_at) - new Date(a.created_at)
//       );
//       setRepositories(sortedRepositories);
//     } catch (error) {
//       setError(error.message); // Set error message in state
//     }
//   };

//   return (
//     <div className="repositories-container">
//       {error && <p>{error}</p>}
//       <Heading text="Featured Projects" />
//       {repositories.map((repo) => (
//         <ProjectCard key={repo.id} repo={repo} />
//       ))}
//     </div>
//   );
// };
