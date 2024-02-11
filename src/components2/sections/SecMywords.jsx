import React, { useState, useEffect } from "react";

import { ArticleCard } from "../articleCard/ArticleCard";
import blogData from "../../blogData.json";

import "./sections.css";

export const SecMywords = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    setArticles(blogData);
  }, [])//Using useEffect to fetch blogdata from json when component is mounted
  return (
    <>
      <ArticleCard articles={articles} />
    </>
  );
};
