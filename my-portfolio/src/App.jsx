import React from 'react';
import Header from './components/Introduction/Header';
import Img from './components/Introduction/Img';
import Bio from './components/Introduction/Bio';
import Contact from './components/Contact/Contact'; 
import Tech from './components/Tech/Tech';
import Skills from './components/Skills/Skills';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Img />
      <Bio />
      <Skills /> 
      <Tech /> 
      <Contact /> 
    </div>
  );
};

export default App;
