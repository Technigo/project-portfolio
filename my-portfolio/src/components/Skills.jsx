import "./css/Skills.css";


const Skills = ({ skillsData }) => {
    return (
        <section className="section-skills">
            <h2 className="h2-skills">Skills</h2>
            <article className="skills-container">
            { skillsData.map((category, index) => (
                <div className="skills-flex-boxes" key={index}>
                    <h3 className="heading-category">{category.category}</h3>
                    <ul className="skill-ul">
                        {category.skills.map((skill, i) => (
                            <li key={i} className="skill-li">{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}

            </article>
        </section>
    );
}; 

export default Skills;