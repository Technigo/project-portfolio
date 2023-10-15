import { MainTitle } from "../../ReusableComponents/Texts/MainTitle";
import { ProjectCard } from "../Projects/ProjectCard";
import "./projects.css"

export const Projects = ({ projects }) => {
    return (
        <section>
            <div className="card-header-wrapper">
                <MainTitle className={"featured-projects-heading"} text={"Featured Projects"} />
            </div>
            {projects.map((project, index) => (
                <div key={index}>
                    <ProjectCard project={project} />
                </div>

            ))}
        </section>
    );
};

