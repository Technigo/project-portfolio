import About from "./components/pages/About"
import Tech from "./components/pages/Tech"
import Projects from "./components/pages/Projects"
import Blog from "./components/pages/Blog"
import Skills from "./components/pages/Skills"
import Contact from "./components/pages/Contact"
import Footer from "./components/pages/Footer"
import "./App.css"

export default function App() {
  return (
    <div>
      <About />
      <Tech />
      <Projects />
      <Blog />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
