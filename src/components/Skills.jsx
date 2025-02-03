import "./css/Skills.css";
import { H2, H3 } from "./Typography"


const Skills = ({ skillsData }) => {
    return (
        <section className="section-skills">
            <H2>Skills</H2>
            <article className="skills-container">
            { skillsData.map((category, index) => (
                <div className="skills-flex-boxes" key={index}>
                    <H3>{category.category}</H3>
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