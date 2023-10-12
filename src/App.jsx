import React, { useState, useEffect } from 'react';
import { HeaderSection } from './components/Header';
import { TechText } from './components/tech';
import { Section } from './components/Section';
import { SkillsText } from './components/skills';

import './App.css';
import './index.css';




// Import the JSON data directly
import projectData from './projects.json';

function App() {
  // Use the JSON data directly
  const projects = projectData.projects;

  return (
    <>
      <HeaderSection />
      <TechText />
      <Section
        projects={projects}
      />
      <SkillsText />
    </>
  );
}

export default App;
