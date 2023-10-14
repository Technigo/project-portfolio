
import { MainTitle } from "../../ReusableComponents/Texts/MainTitle";
import { ProjectCard } from "../Projects/ProjectCard";

export const Projects = ({ projects }) => {
    return (
        <section>
            <div className="card-header-wrapper">
                <MainTitle h1Text="Featured Projects" />
            </div>

            {projects.map((project, index) => (
                <div key={index}>
                    <ProjectCard project={project} />
                </div>

            ))}
        </section>
    );
};

