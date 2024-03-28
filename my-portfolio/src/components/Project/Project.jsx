import PropTypes from "prop-types";
import "./project.css";
import { Card } from "../Card/Card";

export const Project = ({
  name,
  image,
  description,
  tags,
  netlify,
  github,
}) => {
  return (
    <Card
      color="purple"
      mode="landscape"
      source={image}
      title={name}
      description={description}
      direction="row"
      tags={tags}
      netlify={netlify}
      github={github}
    />
  );
};

Project.propTypes = {
  project: PropTypes.object,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
  netlify: PropTypes.string,
  github: PropTypes.string,
};
