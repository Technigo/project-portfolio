import React from 'react';
import './App.css'
import { TopSection } from "./components/TopSection/TopSection";
import { TechSection } from './components/TechSection/TechSection';
import { FeaturedProjects } from './components/FeaturedProjects/FeaturedProjects';
import { MyWords } from './components/MyWords/MyWords';
import { Skills } from './components/Skills/Skills';
import { TimeToTalk } from './components/TimeToTalk/TimeToTalk';
import { Footer } from './components/Footer/Footer';


export const App = () => {
  
  return (
  <section className="body-wrapper">
    <TopSection />
    <TechSection />
    <FeaturedProjects />
    <MyWords />
    <Skills />
    <TimeToTalk />
    <Footer />
    </section>
  );
};

export default App;