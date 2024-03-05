import { MainHeading } from "../Headings/MainHeading/MainHeading";
import { ArticleCard } from "./ArticleCard/ArticleCard";
import "./MyWords.css";

export const MyWords = () => {
  return (
    <div className="my-words-container">
      <div className="my-words-wrapper">
        <MainHeading className={"my-words-h2"} text={"My words"} />
        <ArticleCard />
      </div>
    </div>
  );
};
