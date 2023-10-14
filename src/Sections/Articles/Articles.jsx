import data from "./articles.json";
import "./article.css";
import { MainHeading } from "../../ReusableComponents/Typography/MainHeading";
import { ArticleCard } from "./ArticleCard.jsx";
// import { ImageComponent } from "../../ReusableComponents/ImageElements/ImageComponent";

export const Articles = () => {
    return (
        <section className="articles-section">
            <MainHeading className={"articles-heading"} text={"My words"} />
            <div className="article-cards-section">
                <ArticleCard data={data} />
            </div>
        </section>
    )
}
