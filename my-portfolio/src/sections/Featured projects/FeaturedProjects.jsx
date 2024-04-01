import { ProjectCard } from "./ProjectCard";
import "./FeaturedProjects.css";
import { MainHeading } from "../../components/TextElements/MainHeading";
import PropTypes from "prop-types";

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

// Prop type validation
FeaturedProjects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
// Sort on the starred ones ("stargazers_count": 1)
