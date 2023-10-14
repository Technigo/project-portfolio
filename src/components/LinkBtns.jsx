import "./linkBtns.css";
import { TbView360 } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { BsFileText } from "react-icons/bs";

export const LinkBtns = ({ demo_url, github_url }) => {
  console.log(demo_url);
  console.log(github_url);
  return (
    <div className="btns">
      <a href={demo_url} className="demo-btn" target="_blank">
        <TbView360 className="demo-btn-icon" />
        Live demo
      </a>
      <a href={github_url} className="code-btn" target="_blank">
        <AiFillGithub className="code-btn-icon" />
        View the code
      </a>
    </div>
  );
};

export const ArticleLinkBtn = ({ article_url }) => {
  return (
    <div className="btns">
      <a href={article_url} className="article-btn" target="_blank">
        <BsFileText className="article-btn-icon" />
        Read article
      </a>
    </div>
  );
};
