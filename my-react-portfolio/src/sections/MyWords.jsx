import { MainHeading } from "./components/Typo/MainHeading.jsx";
import { ArticleCard } from "./components/ArticleCard.jsx";

export const MyWords = () => {
    return (
        <section className="mywords-section">
            <MainHeading className={`dark-h2`} text={`My Words`}/>
            <ArticleCard />
        </section>
    )
}