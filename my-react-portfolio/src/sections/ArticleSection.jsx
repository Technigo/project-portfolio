import { ArticleCard } from "../components/ArticleCard/ArticleCard"
import { ArrowButton } from "../components/ArrowButton/ArrowButton"
import { Grid } from "../ui/Grid/Grid"
import { SectionTitle } from "../ui/Typography/Typography"
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
        <ArrowButton text="See more articles" variant="white-on-black" />
      </section>
    </Grid>
  )
}
