import PropTypes from "prop-types";
import "./Project.css";
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
      color="green"
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
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
  netlify: PropTypes.string,
  github: PropTypes.string,
};
