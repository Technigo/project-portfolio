import { Introduction } from "./Sections/Introduction/Introduction"
import { Tech } from "./Sections/Tech/Tech" 
import { FeaturedProjects } from "./Sections/FeaturedProjects/FeaturedProjects"
import { MyWords } from "./Sections/MyWords"
import { Skills } from "./Sections/Skills"
import { LetsTalk } from "./Sections/LetsTalk"
import { TickerTape } from "./Sections/TickerTape"

import './App.css'

export const App = () => {

  return (
    <>
    <div className="app-wrapper">
      <Introduction />
      <Tech />
      <FeaturedProjects />

      <MyWords />
      <Skills />
      <LetsTalk />
      <TickerTape />
    </div>
    </>
  )
}