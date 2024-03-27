import './App.css'
import { Header } from './assets/components/Header/Header'
import { Introduction } from './assets/components/Introduction/Introduction'
import { Tech } from './assets/components/Tech/Tech'
import { FeaturedProjects } from './assets/components/FeaturedProjects/FeaturedProjects'
import { MyWords } from './assets/components/myWords/MyWords'
import { Skills } from './assets/components/Skills'
import { Contact } from './assets/components/Contact'


export const App = () => {
  
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Tech />
        <FeaturedProjects />
        <MyWords />
        <Skills />
        <Contact />
      </main>
    </>
  )
}


