import { Article } from "../../Components/Article/Article"
import articles from "../../../articles.json"
import "./MyWords.css"

export const MyWords = () => {
    return (
        <>
        <div className="border">
            <div className="grid-parent pink">
                <div className="section my-words">
                    <h1>My words</h1>
                    {articles.articles.map(article => (<Article key={article.name} article={article} />))}
                </div>
            </div>
        </div>
        </>
    )
}