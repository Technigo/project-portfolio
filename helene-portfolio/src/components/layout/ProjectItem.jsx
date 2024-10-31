import PropTypes from "prop-types";
import Button from "../common/Button";
import { H3 } from "../common/Typography";
import Tags from "../common/Tags";
import Tag from "../common/Tag";
import "./ProjectItem.css";

const ProjectItem = ({ data }) => {
  const { name, description, image, tags, netlify, github } = data;
  return (
    <article className="project grid-container">
      <div className="project__image col-6">
        <img width="784" src={image} alt="" />
      </div>
      <div className="project__info col-6">
        <H3 className="heading-md">{name}</H3>

        {description && <p>{description}</p>}

        {tags && tags.length > 0 && (
          <Tags>
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
        )}

        <div className="button-group">
          {netlify && (
            <Button variant="primary" href={netlify}>
              View live
            </Button>
          )}
          {github && (
            <Button variant="secondary" href={github}>
              View on GitHub
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

ProjectItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    netlify: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
};

export default ProjectItem;
