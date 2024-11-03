import './SkillsSection.css'; // Importing CSS for styling




const SkillsSection = ({ title, categories }) => {
  return (
    <section className="skills-section">
      <h2 color="#ffffff"> {title}</h2>
      <div className="skills-grid">
        {categories.map((category, index) => (
          <div key={index} className="skills-category">
            <h3 className="category-title" style={{ backgroundColor: category.color }}>
              {category.name}
            </h3>
            <ul className="skills-list">
              {category.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
