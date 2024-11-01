import "./css/ProjectBox.css";

const BoxButtons = ({ demoUrl, codeUrl }) => {
    return (
        <div className="box-btns">
            { demoUrl.map((project, index) => (
            <a key={index} href={project.netlify} target="_blank" className="btn-base primary-btn">
                Live Demo
            </a>
            ))}
            { codeUrl.map((code, i) => (
            <a key={i} href={code.github} target="_blank" className="btn-base secondary-btn">
                View Code
            </a>
            ))}
        </div>
    );
};

export default BoxButtons;




        