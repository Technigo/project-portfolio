import { MainHeading } from "../MainHeading/MainHeading";
import "./MyWords.css";
import { Images } from "../Images/Images";

export const MyWords = () => {
  const articleText =
    "Writing code is less about “just working”. Instead, it's much more about creativity. It's similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.";

  const articleTitle = "Lorem Ipsum";

  return (
    <>
      <section className="my-words-section">
        <img className="divider" src="/assets/divider.svg" alt="" />
        <MainHeading className={"heading-text my-words"} text={"My Words"} />

        <div className="my-words-wrapper">
          <div className="article-box">
            <Images />
            <div className="date-title-wrapper">
              <p className="article-date">July 2023</p>
              <h2 className="article-title">{articleTitle}</h2>
            </div>
            <p className="article-text">{articleText} </p>
            <button className="icon-button read-article">
              <img
                className="icon"
                src="/assets/ReadArticle.svg"
                alt="github icon"
              />
              Read Article
            </button>
          </div>

          <div className="article-box">
            <Images />
            <div className="date-title-wrapper">
              <p className="article-date">July 2023</p>
              <h2 className="article-title">{articleTitle}</h2>
            </div>
            <p className="article-text">{articleText} </p>
            <button className="icon-button read-article">
              <img
                className="icon"
                src="/assets/ReadArticle.svg"
                alt="github icon"
              />
              Read Article
            </button>
          </div>

          <div className="article-box">
            <Images />
            <div className="date-title-wrapper">
              <p className="article-date">July 2023</p>
              <h2 className="article-title">{articleTitle}</h2>
            </div>
            <p className="article-text">{articleText} </p>
            <button className="icon-button read-article">
              <img
                className="icon"
                src="/assets/ReadArticle.svg"
                alt="github icon"
              />
              Read Article
            </button>
          </div>

          <div className="article-box">
            <Images />
            <div className="date-title-wrapper">
              <p className="article-date">July 2023</p>
              <h2 className="article-title">{articleTitle}</h2>
            </div>
            <p className="article-text">{articleText} </p>
            <button className="icon-button read-article">
              <img
                className="icon"
                src="/assets/ReadArticle.svg"
                alt="github icon"
              />
              Read Article
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
