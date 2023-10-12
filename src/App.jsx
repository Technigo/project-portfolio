import React from 'react'
import './App.css'

import { Hello1 } from './Components/Hello1'
import { Tech2 } from './Components/Tech2'
import { FeaturedP3 } from './Components/FeaturedP3/FeaturedP3'
import { Skills4 } from './Components/Skills4'
import { Contact5 } from './Components/Contact5'

const App = () => {
  return (
    <div className="main-wrapper">
      <Hello1 />
      <Tech2 />
      <FeaturedP3 />
      <Skills4 />
      <Contact5 />
    </div>
  )
}

export default App;














{/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */}
