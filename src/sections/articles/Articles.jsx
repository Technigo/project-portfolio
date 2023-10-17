import './articles.css';
import { Heading } from '/src/components/typography/Heading.jsx';
import { ArticleCard } from './ArticleCard.jsx';
import { articles } from './articlesData'; // Import the articles array

export const Articles = () => {
  return (

    <article className="article-container">
      <article className="article-wrapper">
        <Heading level={1} text="My Words" className="article-heading" />
        <div className="article-list">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              imageUrl={article.imageUrl}
              tagText={article.tagText}
              description={article.description}
              link={article.link}
            />
          ))}
        </div>
      </article>
    </article>
  );
};
