// import { useState, useEffect } from 'react'
import { Intro } from './Sections/Introduction/Intro'
import { Projects } from './Sections/Projects/Projects';
import { Tech } from "./Sections/Tech/Tech";
import { Skills } from "./Sections/Skills/Skills";
import { Footer } from "./Sections/Footer/Footer";
import { MyWords } from "./Sections/MyWordSection/MyWords";

// Import the JSON data directly
import projectData from './Sections/Projects/projects.json';
import mywordsData from './Sections/MyWordSection/mywords.json';

// Use the JSON data directly
const projects = projectData.projects;
const mywords = mywordsData.mywords;

export const App = () => {

  return (
    <main>
      <Intro />
      <Tech />
      <Projects projects={projects} />
      <MyWords mywords={mywords} />
      <Skills />
      <Footer />
    </main>
  );
};

export default App;




