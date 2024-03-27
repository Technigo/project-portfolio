import Articlecard from "../Components/ArticleCard";
import mywords from "../mywords.json";

const ArticleList = () => {
  console.log(mywords);

  return mywords.articles.map((article) => {
    return (
      <>
        <Articlecard
          key={article.id}
          title={article.title}
          photo={article.image}
          content={article.content}
          date={article.date}
        />
      </>
    );
  });
};

export default ArticleList;
