import React from 'react';
import { Headline } from '../Headline/Headline';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import ArticleData from '../../../articles.json';
import './Articles.css';

export const Articles = () => {
  return (
    <div className="articles-container">
      <Headline className="headline" text="My words" level={1} />

      {ArticleData.articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};
