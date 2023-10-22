import data from "./articles.json";
import "./article.css";
import { MainHeading } from "../../ReusableComp/Typo/MainHeading";
import { ArticleCard } from "./ArticleCard";

export const Articles = () => {
    return (
        <section id="articles-section" className="articles-section">
            <div className="wavy-line-wrapper"></div>
            <MainHeading className={"articles-heading"} text={"My words"} />
            <div className="article-cards-section">
                <ArticleCard data={data} />
            </div>
        </section>
    )
}
