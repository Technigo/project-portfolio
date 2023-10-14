import { HeadingArticle } from "./ReusableComponentsArticle/HeadingArticle.jsx";
import { BodyTextArticle } from "./ReusableComponentsArticle/BodyTextArticle.jsx";
import { ButtonArticle } from "./ReusableComponentsArticle/ButtonArticle.jsx";

import "./articlecard.css";

import articles from "../data/articles.json";

export const ArticleCard = () => {

    return (
        <div className="article-cards">
            <ul>
                {articles.map((article) => {
                 return (
                    <li key={article.id}>
                        <img className="article-img" src={article.image} alt={article.imageAlt} />
                        <p className="article-date">{article.date}</p>
                        <HeadingArticle text={article.name}/>
                        <BodyTextArticle text={article.text}/>
                        <ButtonArticle link={article.url}  icon={`src/assets/buttons/Read-On-Medium.svg`} iconAlt={`A document icon`}/>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}
