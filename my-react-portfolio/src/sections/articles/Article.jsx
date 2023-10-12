import './article.css'
import { Heading } from '/src/components/typography/Heading.jsx';
import { ArticleCard } from './ArticleCard.jsx';

export const Article = () => {

    return (
        <article className="article-container">
            <Heading level={1} text="My Words" className="featured-articles" />
            <ArticleCard />
        </article>
    );
};