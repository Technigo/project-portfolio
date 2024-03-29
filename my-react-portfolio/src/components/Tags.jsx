import PropTypes from "prop-types";
import "../styling/featureProjects/Tags.css";

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <div key={index} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
