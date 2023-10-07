import React, { useEffect, useState } from 'react';

function MyProjects() {
  const [repos, setRepos] = useState([]);
  const githubUsername = 'Cocofnas'; // Replace with your actual GitHub profile name

  useEffect(() => {
    // Fetch your GitHub repositories data using the fetch API
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
      .then((response) => response.json())
      .then((data) => {
        // Set the repositories data in the state
        setRepos(data);
      })
      .catch((error) => {
        console.error('Error fetching GitHub repositories:', error);
      });
  }, [githubUsername]);

  // Function to generate Netlify deployment URL based on repository name
  const generateNetlifyURL = (repoName) => {
    // Assuming a consistent naming convention: GitHub repo name = Netlify site name
    return `https://${repoName}.netlify.app/`;
  };

  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <a
              href={generateNetlifyURL(repo.name)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployment
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyProjects;

