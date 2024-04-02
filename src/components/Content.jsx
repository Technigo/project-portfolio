import { Header } from "./Header"
import { TechSection } from "./TechSection"
import { ProjectWall } from "./ProjectWall"
import { SkillsSection } from "./SkillsSection"
import { ContactSection } from "./ContactSection"
import { Ticker } from "./Ticker"


export const Content = () => {
  return (
    <div>
      <Header />
      <TechSection />
      <ProjectWall />
      <SkillsSection />
      <ContactSection />
      <Ticker />
    </div>
  )
}
