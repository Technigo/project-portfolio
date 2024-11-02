import { H2 } from "../ui/Heading";
import "./FeaturedProjects.css";

export const FeaturedProjects = () => {
  return (
    <section className="projects-section">
      <H2 heading="Featured Projects" className="projects-heading" />
      <div className="project-cards"></div>
    </section>
  );
};

