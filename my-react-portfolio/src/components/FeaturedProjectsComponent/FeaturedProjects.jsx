import { ProjectCard } from "./ProjectCard";




export const FeaturedProjects = ({ repos }) => {


    return (
        <section>
            {repos.map((repo) => (
                <div key={repo.id}>
                    <ProjectCard  repo={repo} />
                </div>
            ))}
        </section>
    );
}
