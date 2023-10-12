// import { useState, useEffect } from 'react'
import { Intro } from './Sections/Introduction/Intro'
import { Projects } from './Sections/Projects/Projects';
import { Tech } from "./Sections/Tech/Tech";

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
    </main>
  );
};

export default App;




