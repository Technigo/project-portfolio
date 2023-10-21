import './App.css'
import { Articles } from './Sections/Articles/Articles'
import { FeaturedProjects } from './Sections/FeaturedProjects/FeaturedProjects'
import { Header } from './Sections/Header/Header'
import { Tech } from './Sections/Tech/Tech'

export const App = () => {
return (
    <>
    <Header />
    <Tech />
    <FeaturedProjects />
    <Articles />
     

    
    </>
  )

}

export default App