import docIcon from '../Doc.svg'
import { ImageArticle } from '../ImageArticle/ImageArticle'
import './articleCard.css'
import moment from 'moment'
export const ArticleCard = ({ articles, descriptions }) => {
  const formatDate = (dateString) => {
    return moment(dateString).format('MMMM YYYY') // Format to "March 2024"
  }
  return (
    <div>
      {articles.map((items) => (
        <div id="articleCard" key={items.guid}>
          <ImageArticle items={items} />
          <span>{formatDate(items.pubDate)}</span>
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
