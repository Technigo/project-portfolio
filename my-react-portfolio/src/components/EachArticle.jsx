import articles from "../libraries/articles.json"
import readMore from "../assets/read.svg"


export const EachArticle = () => {

    return(
        <>
    {articles.articles.map((item) => (
    <div className="each-article" key={item.id}>
            <img className="article-img" src={item.image} rel="article image" />
                <div className="description">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                <a href={item.url}
                target="_blank" >
                <img src={readMore} alt="read more" className="button read-more"/>
                </a>
            </div>
        </div>
         ))}
    </>
)}