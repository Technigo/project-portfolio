import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Contact from './components/Contact';
import './App.css';
import projectsData from '../projects.json'; 

const App = () => {
  const projects = projectsData.projects;

  return (
    <div className="App">
      <Header />
      <main>
        <Projects projects={projects} />
        <Tech />
        <Contact />
      </main>
    </div>
  );
};

export default App;