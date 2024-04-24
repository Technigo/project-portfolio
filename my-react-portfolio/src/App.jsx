// import { useState, useEffect } from 'react'
import { Intro } from "./Sections/Introduction/Intro";
import { Projects } from "./Sections/Projects/Projects";
import { Tech } from "./Sections/Tech/Tech";
import { Skills } from "./Sections/Skills/Skills";
import { Footer } from "./Sections/Footer/Footer";
import { ProjectCard } from "./Sections/Projects/ProjectCard";

// import { MyWords } from "./Sections/MyWordSection/MyWords";

// Import the JSON data directly
import projectData from "./Sections/Projects/projects.json";
// import mywordsData from './Sections/MyWordSection/mywords.json';

export const App = () => {
  const projects = projectData.projects;
  // const mywords = mywordsData.mywords;

  return (
    <main>
      <Intro />
      <Tech />
      <Projects projects={projects} />
      <ProjectCard />
      {/* <MyWords mywords={mywords} /> */}
      <Skills />
      <Footer />
    </main>
  );
};

export default App;

// MyWords is commented out because I do not have any time to do that section for now.
