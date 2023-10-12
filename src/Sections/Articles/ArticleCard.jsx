import { ImageComponent } from "../../ReusableComponents/ImageElements/ImageComponent";
import { Tag } from "../../ReusableComponents/Typography/Tag.jsx";
import { SubHeading } from "../../ReusableComponents/Typography/SubHeading.jsx";
import { NormalText } from "../../ReusableComponents/Typography/NormalText.jsx";
import { Button } from "../../ReusableComponents/FormElements/Button.jsx";

export const ArticleCard = ({ data }) => {
    const articles = data.articles;
    return (
        <>
            {articles.map((article) => {
                return (
                    <article className="article-card" key={article.name}>
                        <ImageComponent sectionClassName={"image"} elementClassName={"rectangle-img"} link={article.image} ImageAltText={article.name} />
                        <Tag tagText={article.date} />
                        <SubHeading text={article.name} />
                        <NormalText text={article.description} />
                        <Button btnURL={article.link} imgAlt={"Web icon"} iconURL={`/icons/read-more.svg`} btnText={"Read article"} />
                    </article>
                )
            })
            }
        </>
    )
}
