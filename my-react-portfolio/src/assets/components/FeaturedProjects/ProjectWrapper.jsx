import { ProjectImage } from "../projectImage/ProjectImages";
import { Heading } from "../Heading/Heading";
import { Tag } from "../tag/Tag";
import { Demo } from "../iconfoler/Demo";
import { Code } from "../iconfoler/Code";
import "./iconBtn.css";
import "./projects.css";
import "../tag/tag.css";
import "../projectImage/image.css";

export const ProjectWrapper = ({
  projectName,
  projectIntro,
  topics,
  demoLink,
  codeLink,
}) => {
  const projectHeading = projectName.replaceAll("-", " ");
  return (
    <div
      className="projet-container"
      aria-label="Previous projects' information"
    >
      <ProjectImage
        repo={projectName}
        url={demoLink}
        alt={projectName}
        className={"blue"}
      />
      <div className="detail" aria-label="Previous projects' information">
        <Heading heading={projectHeading} />
        <p className="description" aria-label="About the project">
          {projectIntro}{" "}
        </p>
        <ul className="tag">
          {topics.map(
            (topic) =>
              topic !== "portfolio" && <Tag key={topic} topic={topic} />
          )}
        </ul>
        <div className="btn">
          <div id="liveDemoBtn" aria-label="Button of live demo">
            <a href={demoLink}>
              <Demo />
              Live Demo
            </a>
          </div>
          <div id="viewCodeBtn" aria-label="Button of veiwing code">
            <a href={codeLink}>
              <Code />
              View the code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};