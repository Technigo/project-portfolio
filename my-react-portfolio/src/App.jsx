import { useState } from 'react'
import './App.css'
import { Introduction } from './components/sections/Introduction'
import { Tech } from './components/sections/Tech'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Introduction />
    <Tech />
    </>
  )
}

export default App
