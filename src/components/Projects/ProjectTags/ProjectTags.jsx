import PropTypes from "prop-types";
import { IconMappings } from "../../IconMappings";

export const ProjectTags = ({ tags }) => {
  return (
    <div>
      {tags.map((tag) => {
        const Icon = IconMappings[tag];
        return Icon ? <Icon key={tag} title={tag} /> : null;
      })}
    </div>
  );
};

ProjectTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
