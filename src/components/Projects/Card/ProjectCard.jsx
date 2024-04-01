import PropTypes from "prop-types";
import { Image } from "../../Image/Image";
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
      <Image image={image} alt={name} />
      <ProjectContent
        name={name}
        description={description}
        liveDemoLink={liveDemoLink}
        viewTheCodeLink={viewTheCodeLink}
        tags={tags}
      />
    </article>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  liveDemoLink: PropTypes.string.isRequired,
  viewTheCodeLink: PropTypes.string.isRequired,
};
