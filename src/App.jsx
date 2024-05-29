import React from 'react';
import Headline from './Components/Headline'; 
import Tech from './Components/Tech';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Talk from './Components/Talk';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <Headline />
      <Tech />
      <Projects />
      <Skills />
      <Talk />
      <Footer />
    </>
  );
};

export default App;


