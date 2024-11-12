import { H2 } from "../../ui/Typography/Typography.jsx";
import { Card } from "../Cards/Card.jsx";
import { Grid } from "../../ui/GridLayout/Grid.jsx";
import { images } from "../../ui/Images/Images.jsx";
import articlesData from "../../../data/articles.json";
import { Button } from "../../ui/Buttons/Button.jsx";
import iconArrowWhite from "../../../assets/iconArrowWhite.svg";
import "./FeaturedArticles.css"


export const FeaturedArticles = () => {
  console.log(articlesData);
  return (
    <Grid background="black" sectionType="article">
      <div className="title">
        <H2> My words</H2>
      </div>
      <div className="articles-container">
      {articlesData.articles.map((article) => (
        <Card
          key={article.name}
          imageSource={images[article.image] || article.image}
          cardTag={article.tags} 
          cardTitle={article.name}
          cardDescription={article.description}
          sectionType="article"
          // button={<Button text="Read Article" isReadArticle={true} />}
          link={article.link}
        />
      ))}
      </div>
      <Button 
        text="Read More Articles"
        isViewMore={true}
        sectionType="article"
        icon={iconArrowWhite}
        onClick={() => { }}
      />
    </Grid>
  );
};