import { BigHeadlines } from "../Components/BigHeadlines";
import { Article } from "../Components/Article";


export const MyWords = () => {
  const sectionId = 4;
  
  const articleList = [
    {
      id: 1,
      imageURL: "../public/images/article_img_default.jpg",
      title: "Article One",
      date: "June 2023",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida cum sociis natoque penatibus et. Nisl condimentum id venenatis a condimentum vitae."
    },
    {
      id: 2,
      imageURL: "../public/images/article_img_default.jpg",
      title: "Article Two",
      date: "September 2023",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida cum sociis natoque penatibus et. Nisl condimentum id venenatis a condimentum vitae."
    }
  ];

  return (
    <div>
      <BigHeadlines sectionId={sectionId}/>
      {articleList.map((article) => {
        return (
          <Article 
            key={article.id} 
            imageURL={article.imageURL} 
            title={article.title} 
            date={article.date} 
            articleText={article.text}
            sectionId={sectionId}
          />
        )
      })}
    </div>
  )
}
