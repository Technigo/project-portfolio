import './App.css'
import { useEffect, useState } from 'react'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Introduction } from './components/Introduction'
import { Tech } from './components/Tech'
import { Projects } from './components/Projects'
import { Transition } from './components/Transition'
import { ReactTyped } from 'react-typed'
import { Articles } from "./components/Articles"

const App = () => {
  const [loading, setloading] = useState(true)

  const stopLoading = () => {
    setloading(false)
  }

  useEffect(() => {
    setTimeout(() => {
      stopLoading()
    }, 3900)
  }, [])

  return (
    <>
      {loading && (
        <div className="loading">
          <h1>
            {' '}
            <ReactTyped
              strings={['Izabel Lind Farnstrand']}
              typeSpeed={100}
              loop
            />
          </h1>
        </div>
      )}
      {!loading && (
        <Transition>
          <Introduction />
          <Tech />
          <Projects />
          <Articles />
          <Skills />
          <Contact />
        </Transition>
      )}
    </>
  )
}

export default App
