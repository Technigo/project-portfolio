import { BigHeadlines } from "../Components/BigHeadlines";
import { Article } from "../Components/Article";
import { WaveDivider } from "./WaveDivider";

import "./MyWords.css";

export const MyWords = () => {
  const sectionId = 4;
  
  const articleList = [
    {
      id: 1,
      imageURL: "/images/article_img_default.jpg",
      title: "Article One",
      date: "June 2023",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida cum sociis natoque penatibus et. Nisl condimentum id venenatis a condimentum vitae.",
      link: "#"
    },
    {
      id: 2,
      imageURL: "/images/article_img_default.jpg",
      title: "Article Two",
      date: "September 2023",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida cum sociis natoque penatibus et. Nisl condimentum id venenatis a condimentum vitae.",
      link: "#"
    }
  ];

  return (
    <>
      <WaveDivider />
      <div className="article-list-wrapper">
        <BigHeadlines sectionId={sectionId}/>
        <div className="article-list">
          {articleList.map((article) => {
            return (
              <Article 
                key={article.id} 
                imageURL={article.imageURL} 
                title={article.title} 
                date={article.date} 
                articleText={article.text}
                link={article.link}
                sectionId={sectionId}
              />
            )
          })}
        </div>
      </div>
    </>
  );
};
