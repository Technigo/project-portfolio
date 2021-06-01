import React from 'react'

import { Header } from './components/Header'
import { AboutSummary } from './components/AboutSummary'
import { TechSection } from './components/TechSection'
import { FeaturedProjects } from './components/FeaturedProjects'
import { OtherProjects } from './components/OtherProjects'
import { MyThoughts } from './components/MyThoughts'
import { MoreThoughts } from './components/MoreThoughts'
import { SkillSection } from './components/SkillSection'
import { MediaContacts } from './components/MediaContacts'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <main>
      <Header />
      <AboutSummary />
      <TechSection />
      <FeaturedProjects />
      <OtherProjects />
      <MyThoughts />
      <MoreThoughts />
      <SkillSection />
      <MediaContacts />
      <Footer />
    </main>
  )
}
