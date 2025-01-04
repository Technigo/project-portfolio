import articlesData from "../../../data/articles.json";
import { H2 } from "../../ui/Typography/Typography.jsx";
import { Card } from "../Cards/Card.jsx";
import { Grid } from "../../ui/GridLayout/Grid.jsx";
import { images } from "../../ui/Images/Images.jsx";
import { Button } from "../../ui/Buttons/Button.jsx";
import iconArrowWhite from "../../../assets/iconArrowWhite.svg";
import "./FeaturedArticles.css";

export const FeaturedArticles = () => {
  console.log(articlesData);
  return (
    <Grid background="black">
      <div className="articles-container">
        <div className="title">
          <H2> My words</H2>
        </div>
        <div className="article-wrapper">
          {articlesData.articles.map((article) => (
            <Card
              key={article.name}
              imageSource={images[article.image] || article.image}
              cardTag={article.tags}
              cardTitle={article.name}
              cardDescription={article.description}
              sectionType="article"
              link={article.link}
            />
          ))}
        </div>
        <div className="view-more-container">
          <Button
            text="Read More Articles"
            isViewMore={true}
            sectionType="article"
            icon={iconArrowWhite}
            href="https://www.linkedin.com"
            target="_blank"
          />
        </div>
      </div>
    </Grid>
  );
};