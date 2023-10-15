import { ArticleCard } from "./ArticleCard"; 
import "./mywords.css";

export const MyWords = () => {
    return (
        <section className="my-words">
         {/* Container for the wavy line at the top of My Words section */}
        <div className="wavyline-container">
            <img src="src/assets/images/divider.svg" alt="a wavy line" />
         </div>
        <h1 className="h1-mywords">My Words</h1>
        <ArticleCard />
        </section>
    )
}