import PropTypes from "prop-types";
import "./MyWords.css";
import { Button } from "../../components/Button/Button";
import mywords1 from "../../assets/mywords1.png";
import mywords2 from "../../assets/mywords2.png";
import mywords3 from "../../assets/mywords3.png";
import mywords4 from "../../assets/mywords4.png";
import readMore from "../../assets/Doc.svg";
import waveLine from "../../assets/waveline.png";

const MyWordsArticles = [
  {
    imageUrl: mywords1,
    title: "How to stop being scared: Learning to love code",
    preview:
      "Writing code is less about “just working”. Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.",
    link: "https://www.linkedin.com/posts/",
    publishDate: "July 24, 2023",
  },
  {
    imageUrl: mywords2,
    title: "How to stop being scared: Learning to love code!",
    preview:
      "Writing code is less about “just working”. Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7152998899408871425/",
    publishDate: "January 16, 2024",
  },
  {
    imageUrl: mywords3,
    title: "How to stop being scared: Learning to love code",
    preview:
      "Writing code is less about “just working”. Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.",
    link: "https://www.google.se",
    publishDate: "October 1, 2023",
  },
  {
    imageUrl: mywords4,
    title: "How to stop being scared: Learning to love code",
    preview:
      "Writing code is less about “just working”. Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.",

    link: "https://www.google.se",
    publishDate: "October 1, 2023",
  },
];

const ArticleCard = ({ imageUrl, title, preview, link, publishDate }) => {
  return (
    <div className="article-card">
      <img src={imageUrl} alt={title} className="article-image" />
      <span className="publish-date">{publishDate}</span>
      <h3>{title}</h3>
      <p>{preview}</p>
      <Button
        type="read-more"
        text="Read More"
        iconSrc={readMore}
        iconAlt="Read More Icon"
        href={link}
      />
    </div>
  );
};

export const MyWords = () => {
  return (
    <>
      <div className="divider-wrapper">
        <img src={waveLine} alt="dividing line between slides"></img>
      </div>
      <div className="articles-wrapper">
        <h1>My Words</h1>
        <div className="articles-grid">
          {MyWordsArticles.map((article) => (
            <ArticleCard
              key={article.title}
              imageUrl={article.imageUrl}
              publishDate={article.publishDate}
              title={article.title}
              preview={article.preview}
              link={article.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

ArticleCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
};
