import './App.css'

import { About } from "./components/About/About.jsx"
import { Skills } from "./components/Skills/Skills.jsx"
import { Projects } from "./components/Projects/Projects.jsx"
import { Contact } from "./components/Contact/Contact.jsx"
import { Footer } from "./components/Footer/Footer.jsx"

const App = () => {
  return (
    <div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
