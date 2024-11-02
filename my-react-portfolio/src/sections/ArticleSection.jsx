import { Grid } from "../ui/Grid/Grid"
import { SectionTitle } from "../ui/Typography/Typography"
import './ArticleSection.css'
import data from '../../../articles.json'
import { ArticleCard } from "../components/ArticleCard/ArticleCard"

export const ArticleSection = () => {
  const articles = data.articles
  console.log(articles)

  return (
    <Grid background="black">
      <section className="article-section">
        <SectionTitle>My Words</SectionTitle>
        <div className="article-cards">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              image={article.image}
              title={article.title}
              date={article.date}
              description={article.description}
              link={article.link}
            />
          ))}
        </div>
      </section>
    </Grid>
  )
}

// import { Grid } from '../ui/Grid/Grid'
// import { SectionTitle } from '../ui/Typography/Typography'
// import { Card } from '../components/Card/Card'
// import { ArrowButton } from '../components/ArrowButton/ArrowButton'
// import data from '../../../projects.json'
// import './ProjectSection.css'

