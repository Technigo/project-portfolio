import './App.css'
import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import Arrow from './components/Arrow';
import Tech from './components/Tech.jsx';
import Projects from './components/Projects.jsx'
import Mywords from './components/Mywords.jsx';
import Skills from './components/Skills';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer';

function App() {

  return (
    <div className="main-wrapper">
      <Header />
      <Intro />
      <Arrow />
      <Tech />
      <Projects />
      <Mywords />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App; 
