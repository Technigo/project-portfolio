import { projects } from "../../../projects.json";
import { Button } from "../resuable components/Button";
import { Tags } from "../resuable components/Tags";
import "./Projects.css";
import githubIcon from "../../assets/github.svg";
import netlifyIcon from "../../assets/Live-demo.svg";
import githubHoverIcon from "../../assets/github-hover-wht.svg";
import netlifyHoverIcon from "../../assets/Live-demo-hover.svg";

export const Projects = () => {
  return (
    <div className="Projects">
      {projects.map((project, index) => (
        <section className="project-card" key={index}>
          <img
            src={project.image}
            alt={`image of project ${project.name}`}
            className="image-card"
          />
          <div className="project-info">
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <Tags tags={project.tags} />

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
          </div>
        </section>
      ))}
    </div>
  );
};
