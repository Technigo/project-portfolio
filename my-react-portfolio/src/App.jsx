

import { ContactInfoPage } from './section/ContactInfoPage'
import { FeatureProjectsPage } from './section/FeatureProjectsPage'
import { Footer } from './section/Footer'
import { FrontPage } from './section/FrontPage'
import { MyWordsPage } from './section/MyWordsPage'
import { SkillSetPage } from './section/SkillSetPage'
import { TechSkills } from './section/TechSkills'

function App() {


  return (
    <>
      <FrontPage />
      <TechSkills />
      <FeatureProjectsPage />
      <MyWordsPage />
      <SkillSetPage />
      <ContactInfoPage />
      <Footer />
    </>
  )
}

export default App
