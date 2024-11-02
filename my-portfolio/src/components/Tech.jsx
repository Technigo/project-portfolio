import "./css/Tech.css";

const TechStack = ({ techData }) => {

    return (
        <section className="tech-stack">
            <h2>Tech</h2>
            <div className="tech-list">
                {techData.tech.map((tech, index) => (
                    <span key={index} className="tech-item">
                        {tech}
                        {index < tech.length - 1 && ", "}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
