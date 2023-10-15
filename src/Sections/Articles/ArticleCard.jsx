import { ImageComponent } from "../../ReusableComponents/ImageElements/ImageComponent";
import { Tag } from "../../ReusableComponents/Typography/Tag.jsx";
import { SubHeading } from "../../ReusableComponents/Typography/SubHeading.jsx";
import { NormalText } from "../../ReusableComponents/Typography/NormalText.jsx";
import { Button } from "../../ReusableComponents/FormElements/Button.jsx";

// Component for each individual article-card. Takes in data as a prop from its parent the Articles.jsx where the import is made.
export const ArticleCard = ({ data }) => {

    const articles = data.articles;
    return (
        <>
            {/* Mapping through all the data from the jsonfile, and displaying each individual article data along with button-element */}
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
                            <Button className={"read-more-btn"} btnURL={article.link} imgAlt={"Web icon"} iconURL={`/icons/read-more.svg`} btnText={"Read article"}
                            />
                        </div>
                    </article>
                )
            })
            }
        </>
    )
}
