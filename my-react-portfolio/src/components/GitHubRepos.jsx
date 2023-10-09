import React from 'react';

function GitHubRepos({ username, repos, loading }) {
  return (
    <div>
      <h1 className='repoTitle'>Featured Projects</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <div className='projectContainer'>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
                <p>{repo.description}</p>
              </div>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GitHubRepos;
