import "./css/Tech.css";
import { H2 } from "./Typography"

const TechStack = ({ techData }) => {

    return (
        <section className="tech-stack">
            <H2>Tech</H2>
            <div className="tech-list">
                {techData.tech.map((tech, index) => (
                    <span key={index} className="tech-item">
                        {tech}
                        {index < techData.tech.length - 1 && ", "}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
