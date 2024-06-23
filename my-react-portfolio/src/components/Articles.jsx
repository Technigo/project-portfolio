import "./css/articles.css"
import { EachArticle } from "./EachArticle"

export const Articles = () => {
    return (
        <div className="articles">
            <h1>Publications</h1>
            <EachArticle />     
        </div>
    )
}