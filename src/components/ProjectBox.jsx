import BoxImage from "./BoxImage";
import BoxText from "./BoxText";
import BoxButtons from "./BoxButtons";
import "./css/ProjectBox.css"


const ProjectBox = ({ title, description, image, demoUrl, codeUrl }) => {
    return (
        
            <article className="project-box">
                <BoxImage image={image} />
                <BoxText title={title} description={description} />
                <BoxButtons demoUrl={demoUrl} codeUrl={codeUrl} />
            </article>
    );
};

export default ProjectBox;