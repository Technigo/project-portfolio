import { ProjectCard } from "./ProjectCard"

export const Section = ({ projects }) => {
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
