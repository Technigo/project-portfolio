// import React, { useState, useEffect } from "react";

// export const Featuredproj = () => {
//   const [repos, setRepos] = useState([]);

//   useEffect(() => {
//     async function fetchRepos() {
//       try {
//         const response = await fetch('https://api.github.com/users/stenlisuryadinata/repos');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setRepos(data);
//       } catch (error) {
//         console.error('Error fetching repos:', error);
//       }
//     }

//     fetchRepos();
//   }, []);

//   return (
//     <div className="featured_container">
//       <div className="featured_text">
//         <h3 className="featured_myname">Featured Projects</h3>

//         {repos.map((repo) => (
//           <div key={repo.id} className="repo-item">
//             <p>{repo.name}</p>
//             <p>{repo.description}</p>
//             <p>Language: {repo.language}</p>
//             <p>Stars: {repo.stargazers_count}</p>
//             <p>Forks: {repo.forks_count}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// import React, { useState, useEffect } from "react";

// export const Featuredproj = () => {
//   const [repos, setRepos] = useState([]);
//   const selectedRepoNames = ["Digital-Business-Card"];  // Add the project name you want to showcase here
//   const selectedRepoNames = ["project-happy-thoughts-vite"];
//   const selectedRepoNames = ["Digital-Business-Card"];
//   const selectedRepoNames = ["Digital-Business-Card"];
  
//   useEffect(() => {
//     async function fetchRepos() {
//       try {
//         const response = await fetch('https://api.github.com/users/stenlisuryadinata/repos');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();

//         // Filter and select the project with the specified name
//         const selectedRepos = data.filter((repo) =>
//           selectedRepoNames.includes(repo.name)
//         );

//         setRepos(selectedRepos);
//       } catch (error) {
//         console.error('Error fetching repos:', error);
//       }
//     }

//     fetchRepos();
//   }, [selectedRepoNames]);

//   return (
//     <div className="featured_container">
//       <div className="featured_text">
//         <h3 className="featured_myname">Featured Projects</h3>

//         {repos.map((repo) => (
//           <div key={repo.id} className="repo-item">
//             <h4>{repo.name}</h4>
//             <p>{repo.description}</p>
//             <p>Language: {repo.language}</p>
//             <p>Stars: {repo.stargazers_count}</p>
//             {/* You can add more details from the GitHub API response */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// import React, { useState, useEffect } from "react";

// export const Featuredproj = () => {
//   const [repos, setRepos] = useState([]);
//   const selectedRepoNames = [
//     "Digital-Business-Card",
//     "project-happy-thoughts-vite",
//     "Another-Project-Name"
//   ];  // Add the project names you want to showcase here

//   useEffect(() => {
//     async function fetchRepos() {
//       try {
//         const response = await fetch('https://api.github.com/users/stenlisuryadinata/repos');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();

//         // Filter and select the projects with the specified names
//         const selectedRepos = data.filter((repo) =>
//           selectedRepoNames.includes(repo.name)
//         );

//         setRepos(selectedRepos);
//       } catch (error) {
//         console.error('Error fetching repos:', error);
//       }
//     }

//     fetchRepos();
//   }, [selectedRepoNames]);

//   return (
//     <div className="featured_container">
//       <div className="featured_text">
//         <h3 className="featured_myname">Featured Projects</h3>

//         {repos.map((repo) => (
//           <div key={repo.id} className="repo-item">
//             <h4>{repo.name}</h4>
//             <p>{repo.description}</p>
//             <p>Language: {repo.language}</p>
//             <p>Stars: {repo.stargazers_count}</p>
//             {/* You can add more details from the GitHub API response */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// import React, { useState, useEffect } from "react";
// import projectsData from "./projects.json";

// export const Featuredproj = () => {
//   const [combinedData, setCombinedData] = useState([]);
//   const selectedRepoNames = [
//     "Digital-Business-Card",
//     "project-happy-thoughts-vite",
//     "Another-Project-Name"
//   ];

//   useEffect(() => {
//     async function fetchGitHubData() {
//       try {
//         const response = await fetch('https://api.github.com/users/stenlisuryadinata/repos');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const gitHubData = await response.json();

//         // Filter and select the GitHub repositories with the specified names
//         const selectedGitHubRepos = gitHubData.filter((repo) =>
//           selectedRepoNames.includes(repo.name)
//         );

//         // Combine GitHub data with local project data
//         // const combinedData = selectedGitHubRepos.concat(projectsData.projects);
//         const combinedData = projectsData.projects.concat(selectedGitHubRepos);
//         //projectsData.projects.concat(selectedGitHubRepos);
//         setCombinedData(combinedData);
//       } catch (error) {
//         console.error('Error fetching GitHub repos:', error);
//       }
//     }

//     fetchGitHubData();
//   }, [selectedRepoNames]);

//   return (
//     <div className="featured_container">
//       <div className="featured_text">
//         <h3 className="featured_myname">Featured Projects</h3>

//         {combinedData.map((project) => (
//           <div key={project.name} className="repo-item">
//             <h4>{project.name}</h4>
//             <img src={project.image} alt={project.name} />
//             {Array.isArray(project.tags) && project.tags.length > 0 && (
//               <p>Tags: {project.tags.join(', ')}</p>
//             )}
//             {project.netlify && (
//               <p>Netlify: <a href={project.netlify}>{project.netlify}</a></p>
//             )}
//             {project.github && (
//               <p>GitHub: <a href={project.github}>{project.github}</a></p>
//             )}
//             {/* You can add more details from the project objects */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// import React, { useState, useEffect } from "react";
// import projectsData from "./projects.json";

// export const Featuredproj = () => {
//   const [combinedData, setCombinedData] = useState([]);
//   const selectedRepoNames = [
//     "Digital-Business-Card",
//     "project-happy-thoughts-vite",
//     "Another-Project-Name"
//   ];

//   useEffect(() => {
//     async function fetchGitHubData() {
//       try {
//         const response = await fetch('https://api.github.com/users/stenlisuryadinata/repos');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const gitHubData = await response.json();

//         // Filter and select the GitHub repositories with the specified names
//         const selectedGitHubRepos = gitHubData.filter((repo) =>
//           selectedRepoNames.includes(repo.name)
//         );

//         // Combine GitHub data with local project data
//         // const combinedData = selectedGitHubRepos.concat(projectsData.projects);
//         const combinedData = projectsData.projects.concat(selectedGitHubRepos);

//         setCombinedData(combinedData);
//       } catch (error) {
//         console.error('Error fetching GitHub repos:', error);
//       }
//     }

//     fetchGitHubData();
//   }, [selectedRepoNames]);

//   return (
//     <div className="featured_container">
//       <div className="featured_text">
//         <h3 className="featured_myname">Featured Projects</h3>

//         {combinedData.map((project) => (
//           <div key={project.name} className="repo-item">
//             <img src={project.image} alt={project.name} className="project-image" />
//             <div className="repo-item-detail">
//             <h4 className="repo-item-name">{project.name}</h4>
//             {project.description && (
//               <p className="repo-item-desc">{project.description}</p>
//             )}
//             {project.language && (
//               <p>Language: {project.language}</p>
//             )}
//             {project.stargazers_count && (
//               <p>Stars: {project.stargazers_count}</p>
//             )}
//             {/* <img src={project.image} alt={project.name} className="project-image" /> */}
//             {Array.isArray(project.tags) && project.tags.length > 0 && (
//               <p className ="tag-name">Tags: {project.tags.join(', ')}</p>
//             )}
//             <div className="project-links">
//             {project.netlify && (
//                 <p>
//                 <button onClick={() => window.open(project.netlify, "_blank")}>Deploy</button>
//               </p>
//             //   <p><button onClick={() => handleButtonClick(project.netlify)}>Submit</button></p>
//             //   <button onClick={project.netlify} id="submitPostBtn" aria-label="button for submitting your post"> 
//             )}
//             {project.github && (
//             //   <p>GitHub: <a href={project.github}>{project.github}</a></p>
//             <p>
//                 <button onClick={() => window.open(project.github, "_blank")}>Github</button>
//               </p>
        
//             )}
//             {/* You can add more details from the project objects */}
//             </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


import React, { useState, useEffect } from "react";
import projectsData from "./projects.json";

export const Featuredproj = () => {
  const [combinedData, setCombinedData] = useState([]);
  const selectedRepoNames = [
    "Digital-Business-Card",
    "project-happy-thoughts-vite",
    "Another-Project-Name"
  ];

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const response = await fetch('https://api.github.com/users/stenlisuryadinata/repos');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const gitHubData = await response.json();

        // Filter and select the GitHub repositories with the specified names
        const selectedGitHubRepos = gitHubData.filter((repo) =>
          selectedRepoNames.includes(repo.name)
        );

        // Combine GitHub data with local project data
        const combinedData = projectsData.projects.concat(selectedGitHubRepos);

        setCombinedData(combinedData);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      }
    }

    fetchGitHubData();
  }, [selectedRepoNames]);

  return (
    <div className="featured_container">
      <div className="featured_text">
        <h3 className="featured_myname">Featured Projects</h3>

        {combinedData.map((project) => (
          <div key={project.name} className="repo-card">
            <div className="repo-item">
              <img src={project.image} alt={project.name} className="project-image" />
              <div className="repo-item-detail">
                <h4 className="repo-item-name">{project.name}</h4>
                {project.description && (
                  <p className="repo-item-desc">{project.description}</p>
                )}
                {project.language && (
                  <p>Language: {project.language}</p>
                )}
                {project.stargazers_count && (
                  <p>Stars: {project.stargazers_count}</p>
                )}
                {Array.isArray(project.tags) && project.tags.length > 0 && (
                  <p className="tag-name">Tags: {project.tags.join(', ')}</p>
                )}
                <div className="project-links">
                  {project.netlify && (
                    <p>
                      <button onClick={() => window.open(project.netlify, "_blank")}>Deploy</button>
                    </p>
                  )}
                  {project.github && (
                    <p>
                      <button onClick={() => window.open(project.github, "_blank")}>Github</button>
                    </p>
                  )}
                  {/* You can add more details from the project objects */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
