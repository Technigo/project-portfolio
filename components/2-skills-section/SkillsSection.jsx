// SkillsSection.jsx
import './SkillsSection.css'
import data from './skills.json'
import { SkillCategory } from './SkillCategory'

export const SkillsSection = () => {
  return (
    <div className="skills-section">
      <div className="skills-container">
        {data.skillCategories.map((category, index) => (
          <div key={category.title} className="category-wrapper">
            <SkillCategory 
              title={category.title} 
              skills={category.skills} 
            />
            {index < data.skillCategories.length - 1 && <div className="divider" />}
          </div>
        ))}
      </div>
    </div>
  )
}
