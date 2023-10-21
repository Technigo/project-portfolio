import { ImageComponent } from "../../ReusableComp/ImageElements/ImageComp";
import { Tag } from "../../ReusableComp/Typo/Tag";
import { SubHeading } from "../../ReusableComp/Typo/SubHeading";
import { NormalText } from "../../ReusableComp/Typo/NormalText";
import { Button } from "../../ReusableComp/FormElements/Button";

export const ArticleCard = ({ data }) => {

    const articles = data.articles;
    return (
        <>
            {articles.map((article) => {
                return (
                    <article className="article-card" key={article.name}>
                        <ImageComponent sectionClassName={"image"} elementClassName={"rectangle-img"} link={article.image} ImageAltText={article.name} />
                        <div className="article-text-section">
                            <div className="subheading-section">
                                <Tag tagText={article.date} />
                                <SubHeading text={article.name} />
                            </div>
                            <NormalText text={article.description} />
                            <Button className={"read-more-btn"} btnURL={article.link} imgAlt={"Web icon"} iconURL={`/icons/Read-On-Medium.svg`} btnText={"Read article"}
                            />
                        </div>
                    </article>
                )
            })
            }
        </>
    )
}