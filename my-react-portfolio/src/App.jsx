import './App.css'
import { Introduction } from './assets/components/Introduction/Introduction'
import { Tech } from './assets/components/Tech/Tech'
import { FeaturedProjects } from './assets/components/FeaturedProjects/FeatureProjects'
import { MyWords } from './assets/components/myWords/MyWords'
import { Skills } from './assets/components/skills/Skills'
import { Contact } from './assets/components/Contact/Contact'
import { Footer } from './assets/components/footer/Footer'



export const App = () => {
  
  return (
    <>
      <main>
        <Introduction />
        <Tech />
        <FeaturedProjects />
        <MyWords />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  )
}


