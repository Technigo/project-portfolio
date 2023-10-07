import { useState } from 'react'
import './tailwind.css'
import Contact from './components/Contact'; // Import your Contact component
import MyProjects from './components/MyProjects'; // Import your MyProject component
import Presentation from './components/Presentation'; // Import your Presentation component
import Skills from './components/Skills'; // Import your Skills component
import TechSection from './components/TechSection'; // Import your TechSkills component
import TopSection from './components/TopSection'; // Import your TopSection component

function App() {
  return (
    <div>
      {/* Render your components here */}
      <TopSection />
      <TechSection />
      <MyProjects />
      <Presentation />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
