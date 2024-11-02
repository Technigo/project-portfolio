import { SkillCard } from "../components/SkillCard/SkillCard";
import { Grid } from "../ui/Grid/Grid";
import { SectionTitle } from "../ui/Typography/Typography";
import data from '../../../skills.json'
import './SkillSection.css'

export const SkillSection = () => {
  const skills = data.skills

  return (
    <Grid background="white">
      <section className="skills-section">
        <SectionTitle>Skills</SectionTitle>
        <div className="skills-container">
          {skills.map((skillGroup, index) => (
            <SkillCard
              key={index}
              title={skillGroup.title}
              skills={skillGroup.skills}
            />
          ))}
        </div>
      </section>
    </Grid>
  )
}