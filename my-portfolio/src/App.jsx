import './App.css'
import { Header } from "./components/sections/HeaderSection/Header.jsx"
import { FeaturedProjects } from "./components/sections/ProjectsSection/FeaturedProjects.jsx"
import { Tech } from './components/sections/TechSection/Tech.jsx'
import { Skills } from './components/sections/SkillsSection/Skills.jsx'
import { FeaturedArticles } from './components/sections/ArticlesSection/FeaturedArticles.jsx'
import { LetsTalk } from './components/sections/LetsTalkSection/LetsTalk.jsx'

export const App = () => {

  return (
    <>
      <Header />
      <FeaturedProjects />
      <Tech />
      <Skills />
      <FeaturedArticles />
      <LetsTalk />
    </>
  )
}

