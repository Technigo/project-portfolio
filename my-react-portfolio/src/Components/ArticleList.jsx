import Articlecard from "../Components/ArticleCard";
import mywords from "../Sections/mywords.json";

const ArticleList = () => {
  console.log(mywords);

  return mywords.articles.map((article) => {
    return (
      <>
        <Articlecard
          key={article.id}
          name={article.name}
          photo={article.image}
          content={article.content}
          date={article.date}
          tags={article.tags}
          liveLink={article.netlify}
          githubLink={article.github}
        />
      </>
    );
  });
};

export default ArticleList;
