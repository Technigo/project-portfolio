import { Section } from './components/Section/Section'
import { TopPage } from './components/TopPage/TopPage'
import { Tech } from './components/Tech/Tech'
import { Skills } from './components/Skills/Skills'
import { Footer } from './components/Footer/Footer'
import { Articles } from './components/Articles/Articles'
import './App.css'
import { Contact } from './components/Contact/Contact'

function App() {

  return (
    <>
      <TopPage/>
      <Tech/>
      <Section/>
      <Articles/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
