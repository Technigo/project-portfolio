import { H2 } from "../../ui/Typography/Typography.jsx";
import { Card } from "../Cards/Card.jsx";
import { Grid } from "../../ui/GridLayout/Grid.jsx";
import { images } from "../../ui/Images/Images.jsx";
import articlesData from "../../../data/articles.json";
import { Button } from "../../ui/Buttons/Button.jsx";
import iconArrow from "../../../assets/iconArrow.svg";
import "./FeaturedArticles.css"


export const FeaturedArticles = () => {
  console.log(articlesData);
  return (
    <Grid background="black">
      <div className="articles-container">
      <div className="title">
        <H2> My words</H2>
      </div>
      {articlesData.articles.map((article) => (
        <Card
          key={article.name}
          imageSource={images[article.image] || article.image}
          cardTag={article.tags}
          cardTitle={article.name}
          cardDescription={article.description}
          sectionType="article"
          button={<Button text="Read Article" isReadArticle={true} />}
        />
      ))}
      <Button
        text="Read More Articles"
        isViewMore={true}
        icon={iconArrow}
        onClick={() => {/* Handle the click event, e.g., navigate to projects page */ }}
      />
      </div>
    </Grid>
  );
};