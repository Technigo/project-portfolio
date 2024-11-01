import BoxImage from "./BoxImage";
import BoxText from "./BoxText";
import BoxButtons from "./BoxButtons";
import "./css/ProjectBox.css"
import { demoUrl, codeUrl } from "./projects.json";


const ProjectBox = ({ title, description, image, liveDemoUrl, codeUrl }) => {
    return (
        <section className="project-box-grid">
            <article className="project-box">
                <BoxImage image={image} />
                <BoxText title={title} description={description} />
                <BoxButtons demoUrl={demoUrl} codeUrl={codeUrl} />
            </article>
        </section>
    );
};

export default ProjectBox;