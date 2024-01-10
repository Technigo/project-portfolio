import React from 'react';
import './Presentation.css';
import ArticleCard from './ArticleCard';
import SquigglyLine from './squigglyline'; 
import Article1 from '../assets/Article1.jpg'; // Path to your image
import Article2 from '../assets/Article2.jpg'; // Path to your image

function Presentation() {
  // Define the articles array here
  const articles = [
    {
      id: 1,
      title: "Article 1",
      description: "Content to come",
      imageUrl: Article1,
      date: "July 2024"
    },
    {
      id: 2,
      title: "Article 2",
      description: "Content to come",
      imageUrl: Article2,
      date: "August 2024"
    },
    // ... more articles
  ];

  return (
    <div className="presentation">
      <SquigglyLine />
      <h2 className="presentation-heading">My words</h2>
      <div className="articles-grid">
        {articles.map(article => (
          <ArticleCard
            key={article.id}
            title={article.title}
            description={article.description}
            imageUrl={article.imageUrl}
            date={article.date} // Pass the date to each ArticleCard
          />
        ))}
      </div>
    </div>
  );
}

export default Presentation;

