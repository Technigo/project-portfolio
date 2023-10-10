import { ProjectCard } from "./ProjectCard"

export const Section = ({ repos }) => {
    return (
        <section>
            {repos.map((repo) => (
                <div key={repo.id}>
                    <ProjectCard repo={repo} />
                </div>
            ))}
        </section>
    );
}