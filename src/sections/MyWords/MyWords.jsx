import "./MyWords.css";
import { Button } from "../../components/Button";
import ReadMore from "../../assets/Doc.svg";
import waveLine from "../../assets/waveline.png";

const MyWordsArticles = [
  {
    imageUrl: "images/img.png",
    title: "Amazing experience",
    preview:
      "Writing code is less about “just working”. Instead, it’s much more about creativity. It’s similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.",
    link: "https://www.linkedin.com/posts/",
    publishDate: "July 24, 2023",
  },
  {
    imageUrl: "images/img-2.png",
    title: "Final project!",
    preview: "Final Project adventure",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7152998899408871425/",
    publishDate: "January 16, 2024",
  },
  {
    imageUrl: "images/img-3.png",
    title: "The Future of Web",
    preview:
      "A look into the future trends and technologies that are shaping the web...",
    link: "https://www.google.se",
    publishDate: "October 1, 2023",
  },
  {
    imageUrl: "images/img-4.png",
    title: "CSS Secrets and Tips",
    preview:
      "Unravel the secrets of CSS to build beautiful and responsive designs...",

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
        icon={<img src={ReadMore} alt="Icon" />}
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
