import React from "react";

import "./articleImg.css";

export const ArticleImg = () => {
  const articleImage =
    "https://cdn.pixabay.com/photo/2014/12/15/14/02/notebooks-569121_1280.jpg";
  return (
    <>
      <img
        className="article-img"
        src={articleImage}
        alt="Image of woman coding at a computer"
      />
    </>
  );
};
