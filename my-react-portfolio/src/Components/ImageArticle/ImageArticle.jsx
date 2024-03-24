import articleImages from '../article-images.json'
import './imageArticle.css'

export const ImageArticle = ({ items }) => {
  const articleImage = articleImages.find(
    (img) => img.articleTitle === items.title
  )

  return (
    <div className="imgArticleWrapper">
      {articleImage && (
        <img src={articleImage.image} alt={articleImage.image} />
      )}
    </div>
  )
}
