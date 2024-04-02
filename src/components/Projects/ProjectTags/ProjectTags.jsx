import PropTypes from "prop-types";
import { IconMappings } from "../../IconMappings";
import styles from "./ProjectTags.module.css";

export const ProjectTags = ({ tags }) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => {
        const Icon = IconMappings[tag];
        return Icon ? (
          <Icon key={tag} title={tag} className={styles.tag} />
        ) : null;
      })}
    </div>
  );
};

ProjectTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
