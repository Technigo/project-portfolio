
import './App.css'
import { ContactInfo } from './section/ContactInfo'
import { FeatureProjects } from './section/FeatureProjects'
import { Footer } from './section/Footer'
import { FrontPage } from './section/FrontPage'
import { MyWords } from './section/MyWords'
import { SkillSet } from './section/SkillSetContainer'
import { TechSkills } from './section/TechSkills'

function App() {


  return (
    <>
      <section className="front-page"><FrontPage /></section>
      <section className="tech-skills"><TechSkills /></section>
      <section className="featured-projects"><FeatureProjects /></section>
      <section className="my-words"><MyWords /></section>
      <section className="skillSet-page"><SkillSet /></section>
      <section className="contact-info"><ContactInfo /></section>
      <section className="footer"><Footer /></section>
    </>
  )
}

export default App
