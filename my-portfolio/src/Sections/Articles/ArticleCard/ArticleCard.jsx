// ArticleCard.jsx

import { CardPicture } from "../../../components/CardPicture/CardPicture";
import { CardHeadline } from "../../../components/CardHeadline/CardHeadline";
import { CardContent } from "../../../components/CardContent/CardContent";

export const ArticleCard = ({
  heading,
  date,
  image,
  content
}) => {

  return (
    <article className="card-container">
      <CardPicture image={image} />

      <h4>{date}</h4>

      <CardHeadline name={heading} />

      <CardContent description={content} />
    </article>
  );
};