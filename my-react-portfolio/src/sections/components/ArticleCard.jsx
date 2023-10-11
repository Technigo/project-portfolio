import { SubHeading } from "./Typo/SubHeading.jsx";
import { BodyText } from "./Typo/BodyText.jsx";
import { Button } from "./Button.jsx";
import articles from "./data/articles.json";

export const ArticleCard = ( ) => {

    console.log("These are the articles:",articles);
    console.log("TESTING ARRAY:",articles[0].name);

    return (
        <div>
            THIS IS THE CARD
            <ul>
                {articles.map((article) => {
                 return (
                    <li key={article.id}>
                        <img src={article.image} alt={article.imageAlt} />
                        <p>{article.date}</p>
                        <SubHeading className={`dark-h3`} text={article.name}/>
                        <BodyText text={article.text}/>
                        <Button link={article.link} buttonName={`Read Article`} icon={`src/assets/button-icons/doc.svg`} iconAlt={`A document icon`}/>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}
