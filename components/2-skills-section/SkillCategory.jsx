// SkillCategory.jsx
export const SkillCategory = ({ title, skills }) => {
  return (
    <div className="skill-category">
      <h3>{title}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}
