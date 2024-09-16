import { Contact } from "./contact/ContactSection";
import { Projects } from "./projects/ProjectSection";
import { Skills } from "./skills/SkillsSection";
import { TechSection } from "./tech-section/TechSection";
import { TopSection } from "./top-section/TopSection";

export const App = () => {
  return (
    <div>
      <TopSection />
      <TechSection />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};
