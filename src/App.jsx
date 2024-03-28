import './App.css'

import { About } from "./components/1. About/About.jsx"
import { Skills } from "./components/2. Skills/Skills.jsx"
import { Projects } from "./components/3. Projects/Projects.jsx"
import { Contact } from "./components/4. Contact/Contact.jsx"
import { Footer } from "./components/5. Footer/Footer.jsx"

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
