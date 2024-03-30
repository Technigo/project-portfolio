import { ImageArticle } from '../ImageArticle/ImageArticle'
import './articleCard.css'
import { Doc } from '../Icons/Icons'
import moment from 'moment'
export const ArticleCard = ({ articles, descriptions }) => {
  const formatDate = (dateString) => {
    return moment(dateString).format('MMMM YYYY') // Format to "March 2024"
  }
  return (
    <div className="articleContainer2">
      {articles.map((items) => (
        <div id="articleCard" key={items.guid}>
          <ImageArticle items={items} />
          <span>{formatDate(items.pubDate)}</span>
          <h1>{items.title}</h1>
          <p>{descriptions}</p>
          <button id="articleBtn">
            <a href={items.link}>
              <Doc alt="doc-icon" />
              Read Article
            </a>
          </button>
        </div>
      ))}
    </div>
  )
}
