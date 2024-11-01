// ArticleCard.jsx

import { CardPicture } from "../../../components/CardPicture/CardPicture";
import { CardHeadline } from "../../../components/CardHeadline/CardHeadline";
import { CardContent } from "../../../components/CardContent/CardContent";
import { CardButton } from "../../../components/CardButton/CardButton";

export const ArticleCard = ({
  heading,
  date,
  image,
  content,
  url
}) => {

  return (
    <article className="card-container">
      <CardPicture image={image} />

      <h4>{date}</h4>

      <CardHeadline name={heading} />

      <CardContent description={content} />

      <CardButton url={url} btnText="Read Article" />
    </article>
  );
};