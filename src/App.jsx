import './App.css'
import { Articles } from './Sections/Articles/Articles'
import { FeaturedProjects } from './Sections/FeaturedProjects/FeaturedProjects'
import { Footer } from './Sections/Footer/Footer'
import { NameBanner } from './Sections/Footer/NameBanner'
import { Header } from './Sections/Header/Header'
import { Skills } from './Sections/Skills/Skills'
import { Tech } from './Sections/Tech/Tech'

export const App = () => {
return (
    <>
    <Header />
    <Tech />
    <FeaturedProjects />
    <Articles />
    <Skills />
    <Footer />
    <NameBanner />
     

    
    </>
  )

}

export default App