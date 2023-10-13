// import { useState, useEffect } from 'react'
import { Intro } from './Sections/Introduction/Intro'
import { Projects } from './Sections/Projects/Projects';
import { Tech } from "./Sections/Tech/Tech";
import { Skills } from "./Sections/Skills/Skills";
import { Footer } from "./Sections/Footer/Footer"

// Import the JSON data directly
import projectData from './Sections/Projects/projects.json';

// Use the JSON data directly
const projects = projectData.projects;

export const App = () => {

  return (
    <main>
      <Intro />
      <Tech />
      <Projects projects={projects} />
      <Skills />
      <Footer />
    </main>
  );
};

export default App;




