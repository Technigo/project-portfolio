import React, { useState, useEffect } from 'react';
import { HeaderText } from './components/header';
import { TechText } from './components/tech';
import GitHubRepos from './components/GitHubRepos';
import { SkillsText } from './components/skills.jsx'
import { Contact } from './components/contact.jsx'
import './App.css';


function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
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
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [githubUsername]);

  return (
    <>
      <HeaderText />
      <TechText />
      <GitHubRepos username={githubUsername} repos={repos} loading={loading} />
      <SkillsText />
      <Contact />
    </>
  );
}

export default App;

