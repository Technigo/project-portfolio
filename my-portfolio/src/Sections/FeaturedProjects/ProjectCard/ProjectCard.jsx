// ProjectCard.jsx

import { CardPicture } from "../../../components/CardPicture/CardPicture";
import { CardHeadline } from "../../../components/CardHeadline/CardHeadline";
import { CardContent } from "../../../components/CardContent/CardContent";
import { CardButton } from "../../../components/CardButton/CardButton";
import "./ProjectCard.css"

export const ProjectCard = ({
  name,
  image,
  description,
  netlify,
  github
}) => {
  return (
    <article className="card-container">
      <CardPicture image={image} />

      <CardHeadline name={name} />

      <CardContent description={description} />
      <div className="card-btn-container">
        <CardButton url={netlify} btnText="Live Demo" color="orange" />

        <CardButton url={github} btnText="View Code" />
      </div>
    </article>
  );
};