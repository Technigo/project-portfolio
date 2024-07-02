import { WaveDivider } from "../../components/Wave Divider/WaveDivider";
import { SectionHead } from "../../components/SectionHead";
import { Articles } from "../../components/Articles/Articles";
import "./MyWords.css";

export const MyWords = () => {
  const headlineId = 4;

  const articleList = [
    {
      id: 1,
      imageURL: "/images/MyWords-1.png",
      title: "Article One",
      date: "Jan 2024",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida cum sociis natoque penatibus et. Nisl condimentum id venenatis a condimentum vitae.",
      link: "#",
    },
    {
      id: 2,
      imageURL: "/images/MyWords-2.jpg",
      title: "Article Two",
      date: "Feb 2024",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida cum sociis natoque penatibus et. Nisl condimentum id venenatis a condimentum vitae.",
      link: "#",
    },
    {
      id: 3,
      imageURL: "/images/MyWords-3.png",
      title: "Article Three",
      date: "Feb 2024",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida cum sociis natoque penatibus et. Nisl condimentum id venenatis a condimentum vitae.",
      link: "#",
    },
    {
      id: 4,
      imageURL: "/images/MyWords-4.jpg",
      title: "Article Four",
      date: "March 2024",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida cum sociis natoque penatibus et. Nisl condimentum id venenatis a condimentum vitae.",
      link: "#",
    },
  ];

  return (
    <>
      <WaveDivider backgroundColor="#ffecea" />
      <div className="article-list-wrapper">
        <div className="section-head-container">
          <SectionHead headlineId={headlineId} />
        </div>
        <div className="articles-container">
          {articleList.map((article) => (
            <Articles
              key={article.id}
              imageURL={article.imageURL}
              title={article.title}
              date={article.date}
              articleText={article.text}
              link={article.link}
              headlineId={headlineId}
            />
          ))}
        </div>
      </div>
    </>
  );
};
