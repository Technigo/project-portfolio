import './App.css'
import { Introduction } from './components/Introduction/Introduction'
import { Tech } from './components/Tech/Tech'
import { FeaturedProjects } from './components/FeaturedProjects/FeatureProjects'
// import { MyWords } from './assets/components/myWords/MyWords'
import { Skills } from './components/skills/Skills'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/footer/Footer'

export const App = () => {
  
  return (
    <>
      <main>
        <Introduction />
        <Tech />
        <FeaturedProjects />
        {/* <MyWords /> */}
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}