import React, { useState, useEffect } from 'react';

export const API = () => {
  const [repositories, setRepositories] = useState([]);
  const [page, setPage] = useState(1);
  const repoNamesToDisplay = [
    'project-portfolio',
    'project-happy-thoughts-vite',
    'project-survey-vite',
    'project-music-releases-vite',
  ]; // Add the names of the repositories you want to display

  const additionalProjects = [
    {
      name: 'javascript pizzalia',
      description: "It was my first JavaScript project and also my first Technigo project! Haha, I can't even remember how I felt at that time...",
      homepage: 'https://marvelous-bombolone-94bc37.netlify.app',
      html_url: "https://github.com/Technigo/project-pizza/pull/30/commits/32096a773f72ebf0ede783b080f84137b5639eef",
    },
    // Add more projects with similar structure
  ];

  useEffect(() => {
    // Function to fetch data from the GitHub API
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/catfooo/repos?page=${page}&per_page=100`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        if (data.length === 0) {
          // No more repositories to fetch
          return;
        }

        // Combine newly fetched repositories with existing ones
        const updatedRepositories = [...repositories];

        data.forEach((repo) => {
          if (repoNamesToDisplay.includes(repo.name) && !updatedRepositories.some((r) => r.name === repo.name)) {
            updatedRepositories.push(repo);
          }
        });

        setRepositories(updatedRepositories);

        // Increment the page number to fetch the next page
        setPage(page + 1);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page, repoNamesToDisplay, repositories]);

  return (
    <div>
      <h1>Featured Projects</h1>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <h2>{repo.name}</h2>
            {repo.description && <p>Description: {repo.description}</p>}
            {repo.homepage && <p>Homepage: <a href={repo.homepage} target="_blank" rel="noopener noreferrer">{repo.homepage}</a></p>}
            <p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.html_url}
              </a>
            </p>
            <p>Topics: {repo.topics ? repo.topics.join(', ') : 'No topics'}</p>
          </li>
        ))}
      </ul>

      <ul>
        {additionalProjects.map((project, index) => (
          <li key={index}>
            <h2>{project.name}</h2>
            <p>Description: {project.description}</p>
            {project.homepage && (
              <p>Homepage: <a href={project.homepage} target="_blank" rel="noopener noreferrer">{project.homepage}</a></p>
            )}
            {project.html_url && (
              <p>GitHub URL: <a href={project.html_url} target="_blank" rel="noopener noreferrer">{project.html_url}</a></p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
