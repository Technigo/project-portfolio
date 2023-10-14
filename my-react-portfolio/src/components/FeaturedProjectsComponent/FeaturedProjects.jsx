import { ProjectCard } from "./ProjectCard";





export const FeaturedProjects = ({ repos }) => {
console.log(repos);
  
    return (
        <section>
            {repos.map((repo) => (
                <div key={repo.id} className="project-card-wrapper">
                    <ProjectCard  repo={repo} />
                </div>
            ))}
        </section>
    );
}
