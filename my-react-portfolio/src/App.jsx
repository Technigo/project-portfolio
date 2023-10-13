import './App.css'
import { Header } from './Components/Header/Header'
import { Tech } from './Components/Tech/Tech'
import { Projects } from './Components/Projects/Projects'
import { Articles } from './Components/Articles/Articles'
import { Skills } from './Components/Skills/Skills'
import { Footer } from './Components/Footer/Footer'



export const App = () => {


  return (
    <>
   <main>
    <Header />
        <Tech />
        <Projects />
        <Articles />
        <Skills />
        <Footer />
  </main>
    </>
  )
}

