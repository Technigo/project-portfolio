import './App.css'
import { Introduction } from './components/sections/Introduction.jsx'
import { Tech } from './components/sections/Tech.jsx'
import { Contact } from './components/sections/Contact.jsx'
import { Projects } from './components/sections/Projects.jsx'
import { Skills } from './components/sections/Skills.jsx'
import { Footer } from './components/sections/Footer.jsx'

const App = () => {

  return (
    <>
    <Introduction />
    <Tech />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
    </>
  )
}

export default App
