import React, { useState, useEffect } from 'react';
import { HeaderText } from './components/Header';
import { TechText } from './components/tech';
import { Headline } from './components/Headline';
import { Section } from './components/Section';
import { SkillsText } from './components/skills'
import "./components/ProjectCard.module.css";
import './App.css';
import './index.css';

function App() {
  const [repos, setRepos] = useState([]);
  const githubUsername = 'isarobertini'; // Replace with the desired GitHub username

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=created&direction=desc`);

        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchData();
  }, [githubUsername]);

  return (
    <>
      <HeaderText />
      <TechText />
      <Headline />
      <Section
        repos={repos}
        githubUsername={githubUsername}
      />
      <SkillsText />

    </>
  )
}

export default App;