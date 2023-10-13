import React from 'react';
import { HeaderSection } from './components/Header';
import { TechText } from './components/tech';
import { Section } from './components/CardComponent/Section';
import { SkillsText } from './components/skills';
import { Contact } from './components/contact';
import { MyWordsSection } from './components/MyWordsSection';

import './components/CardComponent/CardComponent.css';
import './components/MyWords.css';
import './App.css';
import './index.css';

// Import the JSON data directly
import projectData from './projects.json';
import myWordsData from './mywords.json';

function App() {
  // Use the JSON data directly
  const projects = projectData.projects;
  const mywords = myWordsData.mywords;

  return (
    <>
      <HeaderSection />
      <TechText />
      <Section projects={projects} />
      <MyWordsSection mywords={mywords} />
      <SkillsText />
      <Contact />
    </>
  );
}

export default App;
