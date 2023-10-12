
// import { MainTitle } from "../../ReusableComponents/Texts/MainTitle";
import { ProjectCard } from "../Projects/ProjectCard";

export const Projects = ({ projects }) => {
    return (
        <section>
            {projects.map((project, index) => (
                <div key={index}>
                    <ProjectCard project={project} />
                </div>

            ))}
        </section>
    );
}

