import PropTypes from "prop-types";
import "./TextElements.css";

export const TagText = ({ tagText }) => {
  return (
    <span className={"tag-background"}>
      <p className="tag-text">{tagText}</p>
    </span>
  );
};

// Prop type validation
TagText.propTypes = {
  tagText: PropTypes.string.isRequired, // Validate tagText prop
};
