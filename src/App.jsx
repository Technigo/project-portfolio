import React from 'react';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import './App.css';
import { Presentation } from './components/Presentation/Presentation';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Tech } from './components/Tech/Tech';
import { Articles } from './components/Articles/Articles';
import { Arrow } from './components/Arrow/Arrow';

export const App = () => {
  return (
    <div className="app-container">
      <div className="content-container">
        <Presentation />
        <Arrow />
        <Tech />
        <Projects />
        <Articles />
        <Skills />
        <Contact />
      </div>
      <footer className="app-footer">
        <Footer />
      </footer>
    </div>
  );
};
