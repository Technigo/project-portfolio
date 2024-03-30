import { useEffect, useState } from 'react'
import { ArticleCard } from '../ArticleCard/ArticleCard'

import articleImages from '../article-images.json'
import './articleSection.css'
export const ArticlesSection = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/@lavicafra/feed'
    )
      .then((resp) => resp.json())
      .then((data) => {
        const sortedList = data.items.sort(
          (a, b) => new Date(b.pubDate) - new Date(a.pubDate)
        )
        const pairedArticles = sortedList.map((article) => {
          const matchingImage = articleImages.find(
            (img) => img.articleTitle === article.title
          )
          return {
            ...article,
            image: matchingImage?.image || '',
            description: matchingImage?.description || '',
          }
        })
        setArticles(pairedArticles)
      })
      .catch((error) => console.error(error))
  }, [])
  return (
    <div className="articleSection">
      <h1>My Words</h1>
      <div className="articleSectionContainer">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  )
}
