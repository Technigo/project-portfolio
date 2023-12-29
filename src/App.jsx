import React, { useRef } from 'react';
import './tailwind.css';
import Contact from './components/Contact';
import MyProjects from './components/MyProjects';
import Presentation from './components/Presentation';
import Skills from './components/Skills';
import TechSection from './components/TechSection';
import TopSection from './components/TopSection';
import Footer from './components/Footer';

function App() {
  const contactRef = useRef(null); // Create a ref for the Contact component

  return (
    <div className="container">
      <TopSection scrollToContact={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })} />
      <TechSection />
      <MyProjects />
  {/* <Presentation /> */} 
      <Skills />
      <Contact ref={contactRef} /> {/* Attach the ref to the Contact component */}
      <Footer />
    </div>
  );
}

export default App;