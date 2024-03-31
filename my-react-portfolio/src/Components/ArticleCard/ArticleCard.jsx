import './articleCard.css'
import './imageArticle.css'
import { Doc } from '../Icons/Icons'
import moment from 'moment'
export const ArticleCard = ({ article }) => {
  const formatDate = (dateString) => {
    return moment(dateString).format('MMMM YYYY') // Format to "March 2024"
  }
  return (
    <div className="articleContainer2">
      <div id="articleCard">
        <div className="imgArticleWrapper">
          {article.image && <img src={article.image} alt="article-image" />}
        </div>
        <span>{formatDate(article.pubDate)}</span>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <button id="articleBtn">
          <a href={article.link}>
            <Doc alt="doc-icon" />
            Read Article
          </a>
        </button>
      </div>
    </div>
  )
}
