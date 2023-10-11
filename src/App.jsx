// App.jsx

import React from 'react';
import { Intro } from './components/Intro';
import { Tech } from './components/Tech';
import { Project } from './components/Project';
import Contact from './components/Contact';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { Technology } from './components/Technology';

import happy from './components/happy.png'
import pet from './components/pet.png'
import music from './components/music.png'
import pizza from './components/pizza.png'

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
  const description = "when i was little, i played with web. kids at that time are just thrown to the new virtual world called web. we were happy there and adventurous. while this journey, i wanted to remember that. i was willing to create things that i loved. we were communicating while making web and providing a safe place to each other. we all had a different situation and different interest, but because we could gather we could grow up together. i wanted to remember that, again, and continue my life at the same mood. because my whole journey is saving myself, i wanted to make others feel the same as me. we are still growing in some way, and we will do that together, with our own environment created by ourselves.";

  // Props for Tech component
  const techTitle = "What I want to do while we work together";
  const techDescription = "HTML, CSS, JavaScript, React, React Hooks, Node.js, Web Accessibility, APIs, mob-programming, pair-programming, GitHub.";

  // Props for Project component
  const projectTitle = "what i did while i learn";
  const projectItems = [
    {
      name: "project happy",
      link: "https://github.com/catfooo/project-happy-thoughts-vite",
      projectLink: "https://cozy-khapse-25f81c.netlify.app",
      image: happy,
      description: "i tried to gather happy thoughts from people. user can write things here while they are having happy moment...",
    },
    {
      name: "project pet survey",
      link: "https://github.com/catfooo/project-survey-vite",
      projectLink: "https://astounding-bienenstitch-033bb0.netlify.app",
      image: pet,
      description: "this project is from our pair programming! we worked for making idea specific for our pet we dreamed about...",
    },
    {
      name: "project music releases",
      link: "https://github.com/catfooo/project-music-releases-vite",
      projectLink: "https://stunning-zuccutto-987374.netlify.app",
      image: music,
      description: "this is my first react project! we learned fetching method and asked to use that for this project...",
    },
    {
      name: "javascript pizzalia",
      link: "https://github.com/Technigo/project-pizza/pull/30/commits/32096a773f72ebf0ede783b080f84137b5639eef",
      projectLink: "https://marvelous-bombolone-94bc37.netlify.app",
      image: pizza,
      description: "it was my first javascript project and also my first technigo project! haha, i cant even remember how i felt at that time...",
    },
  ];

  return (
    <form>
      <Introduction 
      name={name}
      description={description}/>
      <Technology techDescription={techDescription}/>
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
