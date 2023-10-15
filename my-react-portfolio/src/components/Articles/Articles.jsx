import React from 'react';
import { Headline } from '../Headline/Headline';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import ArticleData from '../../../articles.json';
// import Divider from './assets/path.svg';
import './Articles.css';

export const Articles = () => {
  return (
    <>    
<div class="svg-background"></div>

    <div className="articles-container">
      <Headline className="headline" text="My words" level={1} />

      {ArticleData.articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
    </>
  );
};
