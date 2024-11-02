import articles from "../Libraries/articles.json";
import { Button } from "./Button/Button"


export const ArticleCard = () => {
  return (
    <>
      {articles.articles.map((item) => (
        <div className="article-card" key={item.id}>
          <img className="article-img" src={item.image} rel="article image" />d
                
          <div className="description">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
            
          <div className="buttons">
            <Button
              className="button"
              source={item.global}
              image="global"
              text="Read article"
              color="pink"
            />
          </div>
        </div>
      ))}
    </>
  )
}
