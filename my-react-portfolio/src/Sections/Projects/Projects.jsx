
import "./projects.css"

import { LargeText } from "../../ReusableComponents/Texts/Largetext";
import { ProjectCard } from "../Projects/ProjectCard";

export const Projects = ({ projects }) => {
    return (
        <section className="projectWrapper">
            <LargeText className="heading-project" text="Featured Projects" />
            {projects.map((project, index) => (
                <div key={index}>
                    <ProjectCard project={project} />
                </div>

            ))}
        </section>
    );
};

