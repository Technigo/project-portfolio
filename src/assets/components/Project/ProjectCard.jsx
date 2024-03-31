import { ProjectImages } from "./ProjectImages";
import { Tags } from "../Tag/Tags";
import { Buttons } from "../ButtonComponents/Buttons";
import "./ProjectCard.css";

export const ProjectCard = ({
  name,
  description,
  tags,
  homepage,
  url,
  headlineId,
}) => {
  return (
    <div className="project-card">
      <ProjectImages projectName={name} />
      <div className="project-description">
        <h2>{name[0].toUpperCase() + name.replaceAll("-", " ").slice(1)}</h2>
        <p>{description}</p>
        <Tags tags={tags} />
        <Buttons homepage={homepage} url={url} headlineId={headlineId} />
      </div>
    </div>
  );
};
