import { Header } from "../common/Header";
import { SkillCard } from "./SkillCard";
import "./skills.css";

export const Skills = () => {
  return (
    <section className="skills-container" aria-label="Skills section label">
      <Header level={1} text="Skills" className="skills-heading" />
      <section className="skills-wrapper">
        <SkillCard />
      </section>
    </section>
  );
};
