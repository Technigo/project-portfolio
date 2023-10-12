import React, { useState, useEffect } from 'react';
import { HeaderText } from './components/Header';
import { TechText } from './components/tech';
import { Headline } from './components/Headline';
import { Section } from './components/Section';
import { SkillsText } from './components/skills';
import "./components/ProjectCard.module.css";
import './App.css';
import './index.css';


// Import the JSON data directly
import projectData from './projects.json';

function App() {
  // Use the JSON data directly
  const projects = projectData.projects;

  return (
    <>
      <HeaderText />
      <TechText />
      <Headline />
      <Section
        projects={projects}
      />
      <SkillsText />
    </>
  );
}

export default App;
