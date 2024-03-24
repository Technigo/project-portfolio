import { Intro } from "./components/Intro"
import { Tech } from "./components/Tech"
import { Projects } from "./components/Projects"
import { MyWords } from "./components/MyWords"
import { Skills } from "./components/Skills"
import { Contact } from "./components/Contact"
import { Banner } from "./components/Banner"
import { ProfilePicture } from "./components/ProfilePicture"
import "./App.css"

export const App = () => {
  return (
    <div className="app-container">
      <Intro />
      <ProfilePicture />
      <Tech />
      <Projects />
      <MyWords />
      <Skills />
      <Contact />
      <Banner />
    </div>
  )
}

