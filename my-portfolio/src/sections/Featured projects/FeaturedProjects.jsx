import { ProjectCard } from "./ProjectCard";
import "./FeaturedProjects.css";
import { MainHeading } from "../../components/TextElements/MainHeading";

export const FeaturedProjects = ({ projects }) => {
  return (
    <section className="projects-container">
      <MainHeading className={"projects-heading"} text={"Featured Projects"} />
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};

// Sort on the starred ones ("stargazers_count": 1)
