import PropTypes from "prop-types";
import Button from "../common/Button";
import { H3 } from "../common/Typography";
import "./ArticleItem.css";

const ArticleItem = ({ data }) => {
  const { name, excerpt, image, link } = data;
  return (
    <article className="article">
      <img
        className="border-radius-lg"
        width="512"
        height="288"
        src={image}
        alt=""
      />
      <div className="article__text">
        <H3>{name}</H3>
        {excerpt && <p className="text-small">{excerpt}</p>}
      </div>
      <div className="button-group">
        {link && (
          <Button
            variant="primary"
            size="small"
            href={link}
            aria-label={`Read article ${name}`}
          >
            Read article
          </Button>
        )}
      </div>
    </article>
  );
};

ArticleItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
  }).isRequired,
};

export default ArticleItem;
