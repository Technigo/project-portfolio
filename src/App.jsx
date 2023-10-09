// App.jsx

import React from 'react';
import { Intro } from './components/Intro';
import { Tech } from './components/Tech';
import { Project } from './components/Project';
import Contact from './components/Contact';
import { Header } from './components/Header';

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
  const techDescription = "HTML, CSS, JavaScript, React, mob-programming, pair-programming";

  return (
    <form>
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
      <Project />
      <Contact />
    </form>
  );
};
