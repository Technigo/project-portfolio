// import { Photo } from "./components/Photo"
import { LinkButton } from "./LinkButton";
import "./ArticleCard.css";

// The over all info about the articles //
export const ArticleCard = () => {
  const articleTitle = "From Healthcare Worker to Frontend Developer";
  const articleText = `"That's why I like tech as a community. Because it's helpful and inviting, especially to newbies."`;
  const url =
    "https://www.technigo.io/stories/antonia-from-healhtcare-to-development";

  //The articles that'll show on my page //
  return (
    <div className="article-card-container">
      <div className="article-card">
        <img src="/article.jpg" alt="" />
        <h2>{articleTitle}</h2>
        <p>{articleText}</p>
        <a href={url} target="_blank" rel="noopener noreferrer"></a>
        <LinkButton buttonText="Read more" url={url} />
      </div>

      <div className="article-card">
        <img src="/article.jpg" alt="" />
        <h2>{articleTitle}</h2>
        <p>{articleText}</p>
        <a href={url} target="_blank" rel="noopener noreferrer"></a>
        <LinkButton buttonText="Read more" url={url} />
      </div>

      <div className="article-card">
        <img src="/article.jpg" alt="" />
        <h2>{articleTitle}</h2>
        <p>{articleText}</p>
        <a href={url} target="_blank" rel="noopener noreferrer"></a>
        <LinkButton buttonText="Read more" url={url} />
      </div>

      <div className="article-card">
        <img src="./assets/article.jpg" alt="" />
        <h2>{articleTitle}</h2>
        <p>{articleText}</p>
        <a href={url} target="_blank" rel="noopener noreferrer"></a>
        <LinkButton buttonText="Read more" url={url} />
      </div>
    </div>
  );
};
