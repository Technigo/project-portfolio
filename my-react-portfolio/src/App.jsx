// import { ArticleCard } from './components/ArticleCard/ArticleCard'
import { Articles } from './components/Articles/Articles'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
// import { Headlines } from './components/Headlines/Headlines'
import './App.css'
import { Presentation } from './components/Presentation/Presentation'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'
import { Tech } from './components/Tech/Tech'
import React from 'react'


// export const App = () => {
//   return (
//     <>
//     <div><Presentation /></div>
//     <div><Tech /></div>
//     <div><Projects /></div>
//     <div><Articles /></div>
//     <div><Skills /></div>
//     <div><Contact /></div>
//     <div><Footer /></div>

//     </>
//   )
// }

export const App = () => {
  return (
    <div className="app-container">
      <div className="content-container">
        <Presentation />
        <Tech />
        <Projects />
        <Articles />
        <Skills />
        <Contact />

      </div>
      <footer className="app-footer">
      <Footer />
      </footer>
    </div>
  );
}

