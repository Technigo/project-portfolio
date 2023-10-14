import React from 'react';
import { HeaderSection } from './Header';
import { TechText } from './components/TechSkillsComponent/tech';
import { Section } from './components/CardComponent/Section';
import { SkillsText } from './components/TechSkillsComponent/skills';
import { Contact } from './components/contact';
import { MyWordsSection } from './components/Article/MyWordsSection';

import './components/CardComponent/CardComponent.css';
import './components/Article/MyWords.css';
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
