import React from 'react';
import Header from './components/Introduction/Header';
import Img from './components/Introduction/Img';
import Bio from './components/Introduction/Bio';
import Contact from './components/Contact/Contact'; 
import Tech from './components/Tech/Tech';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Img />
      <Bio />
      <Projects />
      <Skills /> 
      <Tech /> 
      <Contact /> 
    </div>
  );
};

export default App;
