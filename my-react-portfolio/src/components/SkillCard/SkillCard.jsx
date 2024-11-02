import './SkillCard.css'
import { Tag } from '../Tag/Tag'

export const SkillCard = ({ title, skills }) => {
  return (
    <div className="skill-card">
      <Tag text={title} />
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </div>
  )
}