import { ProjectImage } from "./ProjectImages";
import { Tag } from "./Tag"; 
import { Buttons } from "./Buttons";

export const ProjectCard = ({
  name,
  description,
  tags,
  homepage,
  url,
  headlineId,
}) => {
  return (
    <div>
      <ProjectImage projectName={name} />
          <div className="project-description">
            <h2>
              {name[0].toUpperCase() + name.replaceAll("-", " ").slice(1)}
            </h2>
            <p>{description}</p>
            <Tag tags={tags} />
            <Buttons homepage={homepage} url={url} headlineId={headlineId} />
          </div>
        </div>
  );
};
