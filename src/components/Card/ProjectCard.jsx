import PropTypes from "prop-types";
import { Image } from "../Image/Image";
import { ProjectContent } from "../ProjectContent/ProjectContent";

export const ProjectCard = ({
  image,
  name,
  description,
  tags,
  liveDemoLink,
  viewTheCodeLink,
}) => {
  return (
    <article>
      <Image image={image} />
      <ProjectContent
        name={name}
        description={description}
        tags={tags}
        liveDemoLink={liveDemoLink}
        viewTheCodeLink={viewTheCodeLink}
      />
    </article>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  liveDemoLink: PropTypes.string.isRequired,
  viewTheCodeLink: PropTypes.string.isRequired,
};
