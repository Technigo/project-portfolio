import { MainHeading } from "./components/Typo/MainHeading.jsx";
import { ArticleCard } from "./components/ArticleCard.jsx";

export const MyWords = () => {
    return (
        <section className="mywords-section">
            <div className="myword-wrapper">
                <div className="line-container">
                    <img src="src/assets/elements/wavyline.svg" alt="a wavy line" />
                </div>
                <MainHeading className={`dark-h2`} text={`My Words`}/>
                <ArticleCard />
            </div>
        </section>
    )
}