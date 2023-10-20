import { Section } from './components/Section/Section'
import { TopPage } from './components/TopPage/TopPage'
import { BluePage } from './components/BluePage/BluePage'
import { MyWords } from './components/MyWords/MyWords'
import { Skills } from './components/Skills/Skills'
import { Footer } from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <>
      <TopPage/>
      <BluePage/>
      <Section/>
      <MyWords/>
      <Skills/>
      <Footer/>
    </>
  )
}

export default App
