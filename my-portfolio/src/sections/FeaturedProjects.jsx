import { Heading } from "../ui/Heading";
import { ProjectCard } from "../ui/ProjectCard"
import projectsData from "../data/projects.json"
import "./FeaturedProjects.css";
import "../ui/Tag.css"

export const FeaturedProjects = () => {
  return (
    <section className="projects-section">
      <Heading heading="Featured Projects" level={2} className="projects-heading" />
      <div className="project-cards">
        {projectsData.projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            description={project.description}
            tags={project.tags}
            title={project.name}
            button1Text="View on Netlify"
            button2Text="View on GitHub"
            button1Link={project.netlify}
            button2Link={project.github}
          />
        ))}
      </div>

    </section>
  );
};


