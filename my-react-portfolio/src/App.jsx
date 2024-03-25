import './App.css'
import { Introduction } from './assets/components/Introduction'
import { Tech } from './assets/components/Tech'
import { IndividualProject } from './assets/components/FeaturedProjects/IndividualProject'

export const App = () => {
  
  return (
    <>
      <main>
        <Introduction />
        <Tech />
        <IndividualProject />
      </main>
      
    </>
  )
}


