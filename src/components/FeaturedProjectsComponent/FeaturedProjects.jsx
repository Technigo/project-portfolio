import { ProjectCard } from "./ProjectCard";





export const FeaturedProjects = ({ repos }) => {
console.log(repos);
  
    return (
        <>
            {repos.map((repo) => (
                <div key={repo.id} className="project-card-wrapper">
                    <ProjectCard  repo={repo} />
                </div>
            ))}
        </>
    );
}
