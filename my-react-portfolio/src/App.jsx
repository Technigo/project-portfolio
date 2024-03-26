import { Contact } from "./contact/contact";
import { Projects } from "./projects/projects";
import { Skills } from "./skills/skills";
import { TechSection } from "./tech-section/tech-section";
import { TopSection } from "./top-section/top-section";

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
