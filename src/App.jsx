// App.js
import React from 'react';
import { Intro } from './components/Intro';
import { Tech } from './components/Tech';
import { Project } from './components/Project';
import Contact from './components/Contact';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { Technology } from './components/Technology';
import { Projects } from './components/Projects';
import { Words } from './components/Words'
import Divider from './components/Divider'; // Import the Divider component

import happy from './components/happy.png'
import pet from './components/pet.png'
import music from './components/music.png'
import pizza from './components/pizza.png'
import path from './components/path.png'
import test from './test.jpg'

export const App = () => {
  // Props for Header component
  const name = "So Youn Choi";
  const email = "fakemail@fakemail.jpg";
  const linkedinLink = "https://www.linkedin.com/in/so-youn-choi-703270212/";
  const githubLink = "https://github.com/catfooo";
  const stackoverflowLink = "https://stackoverflowteams.com/c/technigo/users/490/?tab=profile";

  // Props for Intro component
  const job = "Frontend Developer";
  const title = "I make web";
  const description = "when I was little, I played with web. Kids at that time were just thrown into the new virtual world called the web. We were happy there and adventurous. During this journey, I wanted to remember that. I was willing to create things that I loved. We were communicating while making the web and providing a safe place for each other. We all had different situations and different interests, but because we could gather, we could grow up together. I wanted to remember that, again, and continue my life in the same mood. Because my whole journey is saving myself, I wanted to make others feel the same as me. We are still growing in some way, and we will do that together, with our own environment created by ourselves.";

  // Props for Tech component
  const techTitle = "What I want to do while we work together";
  const techDescription = "HTML, CSS, JavaScript, React, React Hooks, Node.js, Web Accessibility, APIs, mob-programming, pair-programming, GitHub.";

  // Props for Project component
  const projectTitle = "What I did while I learned";
  const projectItems = [
    {
      name: "project happy thoughts",
      link: "https://github.com/catfooo/project-happy-thoughts-vite",
      projectLink: "https://cozy-khapse-25f81c.netlify.app",
      image: happy,
      description: "I tried to gather happy thoughts from people. Users can write things here while they are having happy moments...",
      tags: ["React", "API"]
    },
    {
      name: "project pet survey",
      link: "https://github.com/catfooo/project-survey-vite",
      projectLink: "https://astounding-bienenstitch-033bb0.netlify.app",
      image: pet,
      description: "This project is from our pair programming! We worked on making ideas specific for the pet we dreamed about...",
      tags: ["React", "pair-programming"]
    },
    {
      name: "project music releases",
      link: "https://github.com/catfooo/project-music-releases-vite",
      projectLink: "https://stunning-zuccutto-987374.netlify.app",
      image: music,
      description: "This is my first React project! We learned fetching methods and were asked to use them for this project...",
      tags: ["React", "API"]
    },
    {
      name: "javascript pizzalia",
      link: "https://github.com/Technigo/project-pizza/pull/30/commits/32096a773f72ebf0ede783b080f84137b5639eef",
      projectLink: "https://marvelous-bombolone-94bc37.netlify.app",
      image: pizza,
      description: "It was my first JavaScript project and also my first Technigo project! Haha, I can't even remember how I felt at that time...",
      tags: ["Javascript"]
    },
  ];

  // props for words component
  const wordsImage = test
  const wordsTags = ["october 2023"]
  const wordsTitle = "What's your ambition? "
  const wordsDescription = "You are all Front-End Developers now, but if you aspire to be a Fullstack Developer, that's great and we need to know. If you have a UX/design ambition, team-lead/product owner ambition, or anything else, write that down : I am Front-End Developer, but i aspire to be a Fullstack Developer. I want to develop all kind of program in my future, including web and especially, game."

  return (
    <form>
      <Introduction 
        name={name}
        description={description}
      />
      <Technology techDescription={techDescription}/>
      <Projects projectItems={projectItems}/>
      <Divider imagePath={path} altText="Divider" width="30px" height="auto" count={5} />
      <Words 
        wordsImage={wordsImage}
        wordsTags={wordsTags}
        wordsTitle={wordsTitle}
        wordsDescription={wordsDescription}      
      />
      <Header
        name={name}
        email={email}
        linkedinLink={linkedinLink}
        githubLink={githubLink}
        stackoverflowLink={stackoverflowLink}
      />
      <Intro
        name={name}
        job={job}
        title={title}
        description={description}
      />
      <Tech
        techTitle={techTitle}
        techDescription={techDescription}
      />
      <Project
        projectTitle={projectTitle}
        projectItems={projectItems}
      />
      <Contact 
        email={email}
        linkedinLink={linkedinLink}
        githubLink={githubLink}
        stackoverflowLink={stackoverflowLink}
      />
    </form>
  );
};

export default App;
