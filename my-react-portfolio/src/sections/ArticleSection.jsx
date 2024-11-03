import { Grid } from "../ui/Grid/Grid"
import { SectionTitle } from "../ui/Typography/Typography"
import { ArticleCard } from "../components/ArticleCard/ArticleCard"
import data from '../../../articles.json'
import './ArticleSection.css'

export const ArticleSection = () => {
  const articles = data.articles

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
