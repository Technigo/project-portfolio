import data from "./articles.json";
import "./article.css";
import { MainHeading } from "../../ReusableComponents/Typography/MainHeading";
import { ArticleCard } from "./ArticleCard.jsx";

// Component for the articles section. Data is imported here and the structure of the section is set up. 
export const Articles = () => {
    return (
        <section id="articles-section" className="articles-section">
            <MainHeading className={"articles-heading"} text={"My words"} />
            <div className="article-cards-section">
                <ArticleCard data={data} />
            </div>
        </section>
    )
}
