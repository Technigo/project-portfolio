import { H2 } from "../common/Typography";
import projectsData from "../../data/projects.json";
import ProjectItem from "./ProjectItem";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="section-projects section-spacing-vertical section-spacing-horizontal">
      <div className="grid-container">
        <div className="col-12">
          <H2 className="section-heading">Selected work</H2>
          <div className="projects">
            {projectsData.projects.map((project) => (
              <ProjectItem key={project.id} data={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
