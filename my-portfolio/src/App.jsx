import './App.css'
import { Header } from "./components/sections/HeaderSection/Header.jsx"
import { Library } from "./components/sections/LibrarySection/Library.jsx"
import { Bio } from "./components/sections/BioSection/Bio.jsx"
import { FeaturedProjects } from "./components/sections/ProjectsSection/FeaturedProjects.jsx"
import { Tech } from './components/sections/TechSection/Tech.jsx'
import { Skills } from './components/sections/SkillsSection/Skills.jsx'
import { FeaturedArticles } from './components/sections/ArticlesSection/FeaturedArticles.jsx'
import { LetsTalk } from './components/sections/LetsTalkSection/LetsTalk.jsx'

export const App = () => {

  return (
    <>
      <Header />
      <Library />
      <Bio />
      <FeaturedProjects />
      <Tech />
      <Skills />
      <FeaturedArticles />
      <LetsTalk />
    </>
  )
}

