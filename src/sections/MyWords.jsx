import { MainHeading } from "./components/Typo/MainHeading.jsx";
import { ArticleCard } from "./components/ArticleCard.jsx";

export const MyWords = () => {
    return (
        <section className="mywords-section">
            <img src="src/assets/elements/divider.svg" alt="a wavy line" />
            <div className="mywords-wrapper">
                    
                <MainHeading className={`dark-h2`} text={`My Words`}/>
                <ArticleCard />
            </div>
        </section>
    )
}