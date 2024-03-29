import { Image } from "../Image/Image";
import { ProjectContent } from "../ProjectContent/ProjectContent";

export const ProjectCard = ({ image, name, description, tags, liveDemoLink }) => {
  return (
    <article>
      <Image image={image} />
      <ProjectContent
        name={name}
        description={description}
        tags={tags}
        liveDemoLink={liveDemoLink}
      />
    </article>
  );
};
