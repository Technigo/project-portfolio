
import './App.css'
import { ContactInfo } from './section/ContactInfo'
import { FeatureProjectsPage } from './section/FeatureProjectsPage'
import { Footer } from './section/Footer'
import { FrontPage } from './section/FrontPage'
import { MyWordsPage } from './section/MyWordsPage'
import { SkillSetPage } from './section/SkillSetPage'
import { TechSkills } from './section/TechSkills'

function App() {


  return (
    <>
      <section className="front-page"><FrontPage /></section>
      <section className="tech-skills"><TechSkills /></section>
      <section className="featured-projects"><FeatureProjectsPage /></section>
      <section className="my-words"><MyWordsPage /></section>
      <section className="skillSet-page"><SkillSetPage /></section>
      <section className="contact-info"><ContactInfo /></section>
      <section className="footer"><Footer /></section>
    </>
  )
}

export default App
