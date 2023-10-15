import { HeadingArticle } from "./ReusableComponentsArticle/HeadingArticle.jsx";
import { BodyTextArticle } from "./ReusableComponentsArticle/BodyTextArticle.jsx";
import { ButtonArticle } from "./ReusableComponentsArticle/ButtonArticle.jsx";

import "./articlecard.css";

// Import an array of article data from the JSON file.
//import articles from "../data/articles.json";
import articles from "../data/articles.json";

export const ArticleCard = () => {
    // Return the JSX to render to the DOM.
    return (
        <div className="article-cards">
            <ul>
                {articles.map((article) => {
                 return (
                    <li key={article.id}>
                        {/* Display the article image with appropriate alt text. */}
                        <img className="article-img" src={article.image} alt={article.imageAlt} />
                        {/* Display the article's publication date. */}
                        <p className="article-date">{article.date}</p>
                        <HeadingArticle text={article.name}/>
                        <BodyTextArticle text={article.text}/>
                        {/* Create a button linking to the article URL with an icon. */}
                        <ButtonArticle link={article.url}  icon={`src/assets/buttons/Read-On-Medium.svg`} iconAlt={`A document icon`}/>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}
