import { SkillList } from "./SkillList"
import skillsetsData from "./skills.json";
const { skillsets } = skillsetsData;

export const Skills = () => {
  return (
    <section>
      <div>
        <h2>Skills</h2>
      </div>
      <div>
        {skillsets.map((skillset) => (
          <SkillList
          key={skillset.name}
          name={skillset.name}
          skills={skillset.skills}
          />
        ))}
      </div>
    </section>
  )
}