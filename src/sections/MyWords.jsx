import { MainHeading } from "./components/Typo/MainHeading.jsx";
import { ArticleCard } from "./components/ArticleCard.jsx";

export const MyWords = () => {
    return (
        <section className="mywords-section">
            <div className="wavy-line-wrapper">
                <img className="wavy-line" src="src/assets/elements/divider.svg" alt="a wavy line" />
            </div>
            <div className="mywords-wrapper">
                <MainHeading className={`mywords-h2`} text={`My Words`}/>
                <ArticleCard />
            </div>
        </section>
    )
}