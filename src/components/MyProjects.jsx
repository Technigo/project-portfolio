import React, { useEffect, useState } from 'react';
import ViewCodeButton from '../assets/View-Code-Button.svg';
import LiveDemoButton from '../assets/Live-Demo-Button.svg';
import paperFlowerNews from '../assets/WeekNewsapp.jpg';
import Week0Businesswebsite from '../assets//Week0Businesswebsite.jpg';
import Week1Pizza from '../assets//Week1Pizza.jpg';
import Week2Chatbot from '../assets/Week2Chatbot.jpg';
import Week3GuessWho from '../assets/Week3GuessWho.jpg';
import Week4Weather from '../assets/Week4Weather.jpg';
import Week5Music from '../assets/Week5Music.jpg';
import Week6Christmas from '../assets/Week6Christmas.jpg';
import Week7Happy from '../assets/Week7Happy.jpg';
import Week9Movie from '../assets/Week9Movie.jpg';
import Week10Oceanquiz from "../assets/Week10Oceanquiz.jpg";
import Week12QR from '../assets/Week12QR.jpg';
import finalproject from '../assets/Finalproject.jpg';
import './MyProjects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";





const projectOrder = [
  'final-boiler-plate-monorepo',
  'project-custom-hooks-qr-code-generator-vite',
  'project-state-management-quiz-vite',
  'project-movies-vite',
  'project-happy-thoughts-vite',
  'project-survey-vite',
  'project-music-releases-vite',
  'project-weather-app',
  'guesswhodogs',
  'project-chatbot',
  'project-pizza',
  'project-business-site',
  'project-news',
];

const projectDetails = {
  'final-boiler-plate-monorepo': {
    name: 'Foodie Moodie- Technigo finalproject',
    description: 'Choose a restaurant depending on occasion and mood',
    techniques: 'API, Zustand, styled components, WCAG, MongoDB, React Router',
    thumbnail: finalproject
  },

  'project-custom-hooks-qr-code-generator-vite': {
    name: 'QR code generator',
    description: 'Make your own qr- code',
    techniques: 'API, Hooks, Lottieanimations, WCAG',
    thumbnail: Week12QR
  },
  'project-state-management-quiz-vite': {
    name: 'Oceanquiz',
    description: 'A an app with an oceanquiz',
    techniques: 'React router, group-project, hooks',
    thumbnail: Week10Oceanquiz,
    githubUrl: "https://github.com/Cocofnas/project-state-management-quiz-vite",
  },
  'project-movies-vite': {
    name: 'Movieapp',
    description: 'A movieapp which displays the most popular movies right now with description and ratings',
    techniques: 'React router, API',
    thumbnail: Week9Movie,
    githubUrl: "https://github.com/Cocofnas/project-movies-vite",
  },
  'project-happy-thoughts-vite': {
    name: 'Happy Thoughts',
    description: 'The Happy Thoughts project is an application which can be described as happy and nice twitter. It´s my first fullstack project where we first did the frontend and a few weeks later our own backend',
    techniques: 'React, API, MongoDB',
    thumbnail: Week7Happy,
    githubUrl: "https://github.com/Cocofnas/project-happy-thoughts-vite",
  },
  'project-survey-vite': {
    name: 'Christmas Survey App',
    description: 'The Christmas Survey App is a fun and interactive survey about Christmas. It features radio buttons, checkboxes, and a radio handler.',
    techniques: 'React, pair-programming',
    thumbnail: Week6Christmas,
    githubUrl: "https://github.com/Cocofnas/project-survey-vite"
},
  'project-music-releases-vite': {
    name: 'Music Releases on Spotify',
    description: 'The Music Releases project displays the latest music releases from the time of the API.',
    techniques: 'React, Spotify API, CSS',
    thumbnail: Week5Music,
    githubUrl: "https://github.com/Cocofnas/project-music-releases-vite",
},
  'project-weather-app': {
    name: 'Weather App',
    description: 'The Weather App provides current weather information for Stockholm.',
    techniques: 'React, OpenWeather API, CSS, HTML, pair-programming',
    thumbnail: Week4Weather,
    githubUrl: "https://github.com/Cocofnas/project-weather-app",
},
  'guesswhodogs': {
    name: 'Guess Who Game',
    description: 'The Guess Who Game is a classic game where you guess the hidden dog.',
    techniques: 'HTML, CSS, JavaScript',
    thumbnail: Week3GuessWho
},
  'project-chatbot': {
    name: 'The order chatbot',
    description: 'The Chatbot app is a conversational AI-powered tool designed to take your food order.',
    techniques: 'JavaScript, HTML5, CSS3',
    thumbnail: Week2Chatbot
},
'project-pizza': {
  name: 'The Pizza App',
  description: 'The Pizza App allows you to customize and order your favorite pizza using a simple user interface.',
  techniques: 'HTML5, CSS3, JavaScript',
  thumbnail: Week1Pizza,
  githubUrl: 'https://github.com/Cocofnas/project-pizza',
},
  'project-business-site': {
    name: 'Technigo Precourse Business Website',
    description: 'The Business Website is a simple website for a fictional tattoo parlor.',
    techniques: 'HTML5, CSS3',
    thumbnail: Week0Businesswebsite
  },
  'project-news': {
    name: 'News App',
    description: 'The News App displays the latest news from the world of paper flowers.',
    techniques: 'React, News API',
    thumbnail: paperFlowerNews,
    githubUrl: 'https://github.com/Cocofnas/project-news'
  },
};

const netlifyUrls = {
  'final-boiler-plate-monorepo': 'https://foodiemoodie.netlify.app/',
  'project-custom-hooks-qr-code-generator-vite':'https://cocofnasqrcode.netlify.app/',
  'project-state-management-quiz-vite': 'https://theoceanquiz.netlify.app/',
  'project-movies-vite': 'https://subtle-macaron-96a6c5.netlify.app/',
  'project-happy-thoughts-vite': 'https://cocofnashappythoughts.netlify.app/',
  'project-survey-vite': 'https://cocofnaschristmassurvey.netlify.app/',
  'project-music-releases-vite': 'https://cocofnasspotify.netlify.app/',
  'project-weather-app': 'https://mam-weatherapp.netlify.app/',
  'guesswhodogs': 'https://guessthedog.netlify.app/',
  'project-chatbot': 'https://cocofnaschatbot.netlify.app/',
  'project-pizza': 'https://cocofnaspizza.netlify.app/',
  'project-business-site': 'https://quiet-maamoul-e254ec.netlify.app/',
  'project-news': 'https://cute-meringue-8f9187.netlify.app/',
};

function MyProjects() {
  const [repos, setRepos] = useState([]);
  const githubUsername = 'Cocofnas'; // Replace with your actual GitHub profile name

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched repositories:', data); // Check for missing repos
        setRepos(data);
      })
      .catch((error) => {
        console.error('Error fetching GitHub repositories:', error);
      });
  }, [githubUsername]);

  const settings = {
    dots: true, // Add navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides visible at a time
    slidesToScroll: 1, // Slides scrolled at a time
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // For mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="my-projects">
      <h2 className="classh2project">Featured Projects</h2>
      <Slider {...settings}>
        {projectOrder.map((repoName) => {
          const repo = repos.find((repo) => repo.name === repoName);
          const project = projectDetails[repoName];

          if (project) {
            const githubUrl = repo?.html_url || project.githubUrl; // Use manual URL if `repo` is missing
            const netlifyUrl = netlifyUrls[repoName];

            return (
              <div key={repo?.id || repoName} className="project-item">
                <img
                  src={project.thumbnail || 'default-thumbnail.jpg'}
                  alt={`${project.name || 'Unnamed Project'} thumbnail`}
                  className="project-thumbnail"
                />
                <div className="project-content">
                  <h3 className="project-name">{project.name || 'Unnamed Project'}</h3>
                  <p className="project-description">
                    {project.description || 'No description available.'}
                  </p>
                  <div className="project-techniques">
                    {project.techniques
                      ? project.techniques.split(', ').map((technique, index) => (
                          <div key={index} className="technique-box">{technique}</div>
                        ))
                      : 'No techniques listed.'}
                  </div>
                  <div className="project-links">
                    {githubUrl ? (
                      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn-view">
                        <img src={ViewCodeButton} alt="View Code Button" />
                      </a>
                    ) : (
                      <span className="btn-disabled">Code Unavailable</span>
                    )}
                    <a href={netlifyUrl || '#'} target="_blank" rel="noopener noreferrer" className="btn-live">
                      <img src={LiveDemoButton} alt="Live Demo Button" />
                    </a>
                  </div>
                </div>
              </div>
            );
          }

          return null;
        })}
      </Slider>
    </div>
  );
}

export default MyProjects;