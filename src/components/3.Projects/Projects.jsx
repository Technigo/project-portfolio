import { projects } from "../../../projects.json";
import { Button } from "./resuable/Button";
import { Tags } from "./resuable/Tags";

import "./Projects.css";

const githubIcon = "../../assets/github.svg";
const netlifyIcon = "../../assets/Live-demo.svg";
const githubHoverIcon = "../../assets/github-hover.svg";
const netlifyHoverIcon = "../../assets/Live-demo-hover.svg";

export const Projects = () => {
  return (
    <div className="Projects">
      {projects.map((project, index) => (
        <section className="project-card" key={index}>
          <div className="project-images">
            <img
              src={project.image}
              alt={`image of project ${project.name}`}
              className="image-card"
            />
          </div>
          <div className="project-info">
            <h4 className="project-title">{project.name}</h4>
            <p className="project-description">{project.description}</p>
            <Tags tags={project.tags} />
          </div>
          <div className="project-buttons" aria-label="Buttons">
            <Button
              url={project.netlify}
              icon={netlifyIcon}
              hoverIcon={netlifyHoverIcon}
              alt={"Live demo on Netlify"}
              text={"Live Demo"}
              className={"netlify-button"}
            />

            <Button
              url={project.github}
              icon={githubIcon}
              hoverIcon={githubHoverIcon}
              alt={"View code on Github"}
              text={"View the code"}
              className={"github-button"}
            />
          </div>
        </section>
      ))}
    </div>
  );
};
