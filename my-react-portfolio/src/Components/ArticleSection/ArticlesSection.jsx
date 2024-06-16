import { useEffect, useState } from 'react'
import { ArticleCard } from '../ArticleCard/ArticleCard'
import articleImages from '../article-images.json'
import './articleSection.css'

export const ArticlesSection = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          'https://v1.nocodeapi.com/vittoriam/medium/WjrrDaitUqQiqAzo'
        )
        if (!response.ok) {
          throw new Error('Failed to fetch articles')
        }
        const data = await response.json()

        // Sort articles by publication date (assuming 'published' is the date field)
        const sortedArticles = data.sort(
          (a, b) => new Date(b.published) - new Date(a.published)
        )

        // Match articles with corresponding images and descriptions
        const matchedArticles = sortedArticles.map((article) => {
          const matchedImage = articleImages.find(
            (img) => img.articleTitle === article.title
          )
          return {
            ...article,
            image: matchedImage ? matchedImage.image : '',
            description: matchedImage ? matchedImage.description : '',
          }
        })

        setArticles(matchedArticles)
      } catch (error) {
        console.error('Error fetching articles:', error)
      }
    }

    fetchArticles()
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
