import React from "react";
import { useMediaQuery } from "react-responsive";
import './App.css'
import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import Arrow from './components/Arrow.jsx';
import Tech from './components/Tech.jsx';
import Projects from './components/Projects.jsx'
import ProjectsTablet from "./components/ProjectsTablet.jsx";
import Mywords from './components/Mywords.jsx';
import MywordsTablet from './components/MywordsTablet.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 390 });
  const isTablet = useMediaQuery({ minWidth: 391, maxWidth: 1024 });

  return (
    <div className="main-wrapper">
      <Header />
      <Intro />
      <Arrow />
      <Tech />

      {isMobile ? (
        <Projects />
      ) : isTablet ? (
        <ProjectsTablet />
      ) : (
        <Projects />
      )}

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
