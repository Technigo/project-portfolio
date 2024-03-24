import docIcon from '../Doc.svg'
import { ImageArticle } from '../ImageArticle/ImageArticle'
import './articleCard.css'
export const ArticleCard = ({ articles, descriptions }) => {
  return (
    <div>
      {articles.map((items) => (
        <div id="articleCard" key={items.guid}>
          <ImageArticle items={items} />
          <span>{items.pubDate}</span>
          <h1>{items.title}</h1>
          <p>{descriptions}</p>
          <a href={items.link}>
            <img src={docIcon} alt="doc-icon" />
            Read Article
          </a>
        </div>
      ))}
    </div>
  )
}
