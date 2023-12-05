import React from "react";
import { useMediaQuery } from "react-responsive";
import './App.css'
import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import Arrow from './components/Arrow';
import Tech from './components/Tech.jsx';
import Projects from './components/Projects.jsx'
import Mywords from './components/Mywords.jsx';
import MywordsTablet from './components/MywordsTablet';
import Skills from './components/Skills';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer';

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 390 });
  const isTablet = useMediaQuery({ minWidth: 391, maxWidth: 1024 });

  return (
    <div className="main-wrapper">
      <Header />
      <Intro />
      <Arrow />
      <Tech />
      <Projects />
      {isMobile ? (
        <MywordsTablet />
      ) : isTablet ? (
        <MywordsTablet />
      ) : (
        <Mywords />
      )}
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App; 
