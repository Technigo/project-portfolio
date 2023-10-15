import data from "./articles.json";
import "./article.css";
import { MainHeading } from "../../ReusableComponents/Typography/MainHeading";
import { ArticleCard } from "./ArticleCard.jsx";
// import { Wavyline } from "../../ReusableComponents/ImageElements/Wavyline";

export const Articles = () => {
    return (
        <section id="articles-section" className="articles-section">
            {/* <Wavyline /> */}
            <MainHeading className={"articles-heading"} text={"My words"} />
            <div className="article-cards-section">
                <ArticleCard data={data} />
            </div>
        </section>
    )
}
