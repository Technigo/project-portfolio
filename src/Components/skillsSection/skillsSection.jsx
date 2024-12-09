// src/components/skillsSection/skillsSection.jsx

import '../../App.css';

// Arrays de habilidades
const techSkills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];
const legalSkills = ['Intellectual Property', 'Compliance', 'Data protection', 'Cibersecurity', 'Labour Relations'];
const hrSkills = ['HRIS and algorithms', 'Agile projects Management', 'Cost controlling', 'Employee Relations', 'Conflict Resolution'];

function SkillsSection() {
    return (
        <section className="skills-section">
            <h2>Skills</h2>

            {/* Tech Skills */}
            <div className="skills-group">
                <button className="skills-button">Tech Skills</button>
                <div className="skills-list">
                    {techSkills.map((skill, index) => (
                        <div key={index} className="skill-item">{skill}</div>
                    ))}
                </div>
            </div>

            {/* Legal Skills */}
            <div className="skills-group">
                <button className="skills-button">Legal Skills</button>
                <div className="skills-list">
                    {legalSkills.map((skill, index) => (
                        <div key={index} className="skill-item">{skill}</div>
                    ))}
                </div>
            </div>

            {/* HR Skills */}
            <div className="skills-group">
                <button className="skills-button">HR Skills</button>
                <div className="skills-list">
                    {hrSkills.map((skill, index) => (
                        <div key={index} className="skill-item">{skill}</div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;

