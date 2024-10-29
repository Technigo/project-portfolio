import "./skills.css";
import { SkillCard } from "../../components/SkillCard";

export const Skills = () => { 
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-heading">Skills</h2>
        <SkillCard />
      </div>
    </section>    
  )
 }