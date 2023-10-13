import { ProjectCard } from "./ProjectCard";





export const FeaturedProjects = ({ repos }) => {
console.log(repos);
  
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
