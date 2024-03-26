import { Intro } from "./components/sections/Intro"
import { Tech } from "./components/sections/Tech"
import { Projects } from "./components/sections/Projects"
import { MyWords } from "./components/sections/Articles"
import { Skills } from "./components/sections/Skills"
import { Contact } from "./components/sections/Contact"
import { Banner } from "./components/sections/Banner"
import { ProfilePicture } from "./components/sections/ProfilePicture"
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
