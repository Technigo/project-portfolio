import React, { useEffect, useState } from 'react';
import ViewCodeButton from '../assets/View-Code-Button.svg';
import LiveDemoButton from '../assets/Live-Demo-Button.svg';



const projectOrder = [
  'project-happy-thoughts-vite',
  'project-survey-vite',
  'project-music-releases-vite',
  'project-weather-app',
  'project-guess-who',
  'project-chatbot',
  'project-pizza',
  'project-business-site',
  'project-news',
];

const projectDetails = {
  'project-happy-thoughts-vite': {
    name: 'Technigo Week 7 Happy Thoughts',
    description: 'The Happy Thoughts project is an application which can be described as happy and nice twitter.',
    techniques: 'React, API',
  },
  'project-survey-vite': {
    name: 'Technigo Week 6 Christmas Survey App',
    description: 'The Christmas Survey App is a fun and interactive survey about Christmas. It features radio buttons, checkboxes, and a radio handler.',
    techniques: 'React, pair-programming',
  },
  'project-music-releases-vite': {
    name: 'Technigo Week 5 Music Releases',
    description: 'The Music Releases project displays the latest music releases from the time of the API.',
    techniques: 'React, Spotify API, CSS',
  },
  'project-weather-app': {
    name: 'Technigo Week 4 Weather App',
    description: 'The Weather App provides current weather information for Stockholm.',
    techniques: 'React, OpenWeather API, CSS, HTML, pair-programming',
  },
  'project-guess-who': {
    name: 'Technigo Week 3 Guess Who Game',
    description: 'The Guess Who Game is a classic game where you guess the hidden character.',
    techniques: 'HTML, CSS, JavaScript',
  },
  'project-chatbot': {
    name: 'Chatbot Built in JavaScript',
    description: 'The Chatbot app is a conversational AI-powered tool designed to take your food order.',
    techniques: 'JavaScript, HTML5, CSS3',
  },
  'project-pizza': {
    name: 'Technigo Week 1 Pizza App',
    description: 'The Pizza App allows you to customize and order your favorite pizza using a simple user interface.',
    techniques: 'HTML5, CSS3, JavaScript',
  },
  'project-business-site': {
    name: 'Technigo Precourse Business Website',
    description: 'The Business Website is a simple website for a fictional tattoo parlor.',
    techniques: 'HTML5, CSS3',
  },
  'project-news': {
    name: 'Technigo News App',
    description: 'The News App displays the latest news from the world of paper flowers.',
    techniques: 'React, News API',
  },
};

const netlifyUrls = {
  'project-happy-thoughts-vite': 'https://cocofnashappythoughts.netlify.app/',
  'project-survey-vite': 'https://stunning-faloodeh-3e176a.netlify.app/',
  'project-music-releases-vite': 'https://cocofnasspotify.netlify.app/',
  'project-weather-app': 'https://mam-weatherapp.netlify.app/',
  'project-guess-who': 'https://cocofnasguesswho.netlify.app/',
  'project-chatbot': 'https://cocofnaschatbot.netlify.app/',
  'project-pizza': 'https://cocofnaspizza.netlify.app/',
  'project-business-site': 'https://quiet-maamoul-e254ec.netlify.app/',
  'project-news': 'https://cute-meringue-8f9187.netlify.app/',
};

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

  return (
    <div className="my-projects">
      <h2 className="classh2project">Featured projects</h2>
      <div className="project-list">
        {projectOrder.map((repoName) => {
          const repo = repos.find((repo) => repo.name === repoName);
          const project = projectDetails[repoName];
          const netlifyUrl = netlifyUrls[repoName];

          if (repo && project) {
            const codeUrl = repo.html_url;

            return (
              <div key={repo.id} className="project-item">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-techniques">
                  {project.techniques.split(', ').map((technique, index) => (
                    <div key={index} className="technique-box">
                      {technique}
                    </div>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-view"
                  >
                    <img src={ViewCodeButton} alt="View Code Button" />
                  </a>
                  <a
                    href={netlifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-live"
                  >
                    <img src={LiveDemoButton} alt="Live Demo Button" />
                  </a>
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}

export default MyProjects;