import { useEffect, useState } from 'react'
import { ArticleCard } from '../ArticleCard/ArticleCard'
import Line from '../path-line.svg'
import articleImages from '../article-images.json'
import './articleSection.css'
export const ArticlesSection = () => {
  const [articles, setArticles] = useState([])
  const [descriptions, setDescriptions] = useState([])
  useEffect(() => {
    fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lavicafra'
    )
      .then((resp) => resp.json())
      .then((data) => {
        const sortedList = data.items.sort(
          (a, b) => new Date(b.pubDate) - new Date(a.pubDate)
        )
        setArticles(sortedList)
        const extractedDescriptions = sortedList.map(
          (item) =>
            articleImages.find((img) => img.articleTitle === item.title)
              ?.description || ''
        )
        setDescriptions(extractedDescriptions)
      })
      .catch((error) => console.error(error))
  }, [])
  return (
    <div className="articleSectionContainer">
      <img src={Line} alt="divisor" />
      <h1>My Words</h1>
      <ArticleCard articles={articles} descriptions={descriptions} />
    </div>
  )
}
