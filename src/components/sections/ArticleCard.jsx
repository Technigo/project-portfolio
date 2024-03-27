import { BsFileText } from "react-icons/bs"
import articles from "../../json/articles.json"
import { Tags } from "../reusable/Tags"
import { Button } from "../reusable/Buttons"

export const ArticleCard = () => {
  return (
    <div className="article-card">
      {articles.articles.map(({ id, title, image, date, summary, link }) => {
        return (
          <div className="article-item" key={id}>
            <img
              src={image}
              alt={`image for article ${title}`}
              className="article-photo"
            />
            <div className="article-data">
              <p className="date">{date}</p>
              <h4 className="article-name">{title}</h4>
              <p className="hind">{summary}</p>
            </div>
            <div className="article-buttons">
              <Button
                url={link}
                className="link-button-article"
                icon={<BsFileText className="button-icon-article" />}
                text="Read article"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
