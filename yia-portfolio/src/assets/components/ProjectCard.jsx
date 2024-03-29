import { ProjectImages } from "./ProjectImages";
import { Tags } from "./Tags"; 
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
      <ProjectImages projectName={name} />
          <div className="project-description">
            <h2>
              {name[0].toUpperCase() + name.replaceAll("-", " ").slice(1)}
            </h2>
            <p>{description}</p>
            <Tags tags={tags} />
            <Buttons homepage={homepage} url={url} headlineId={headlineId} />
          </div>
        </div>
  );
};
