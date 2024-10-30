// ProjectCard.jsx

import { CardPicture } from "../../../components/CardPicture/CardPicture";
import { CardHeadline } from "../../../components/CardHeadline/CardHeadline";
import { CardContent } from "../../../components/CardContent/CardContent";

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
    </article>
  );
};