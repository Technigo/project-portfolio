
import { MediumHeadline } from "../MediumHeadline";
import { TagComponent } from "../TagComponent";
import { Textbox } from "../Textbox";
import { ReadMoreButton } from "./ReadMoreButton";




export const MyWordsCard = ({ articleImage, articleDate, articleTitle, articleText, articleLink }) => {

    return (
        <div className="my-words-card">
            <img src={articleImage} alt="article image" className="article-card-image" />
            <div className="my-words-heading-wrapper">
                <TagComponent tag={articleDate} />
                <MediumHeadline
                    className="medium-headline"
                    mediumSizeHeader={articleTitle}
                    useSpan={false}
                />
            </div>
            <Textbox text={articleText} />
            <ReadMoreButton articleLink={articleLink} />
        </div>
    )
}
