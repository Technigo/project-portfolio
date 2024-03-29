import React from 'react';
import './Presentation.css';
import ArticleCard from './ArticleCard';
import SquigglyLine from './squigglyline'; 
import Article1 from '../assets/Article1.jpg'; // Path to your image
import Article2 from '../assets/Article2.jpg'; // Path to your image
import Article3 from '../assets/Article3.jpg'; // Path to your image

function Presentation() {
  // Define the articles array here
  const articles = [
    {
      id: 3,
      title: "Imposter syndrome and when it hits you",
      description: "My everlasting feeling of being an imposter and how I deal with it",
      imageUrl: Article3,
      date: "March 2024",
      url: "https://medium.com/@alexandrameija/impostor-syndrome-and-when-it-hits-you-d794c6d4cd69" // Add the article's URL here
    },
    {
      id: 2,
      title: "GLOW",
      description: "The start of the community GLOW (Glorious Lades of Web development).",
      imageUrl: Article2,
      date: "March 2024",
      url: "https://medium.com/@alexandrameija/glow-b02ed82d2ca6" // Add the article's URL here
    },
    {
      id: 1,
      title: "Why I became a techie (and launched a new careerpath after 40)",
      description: "My journey towards becoming a person in tech.",
      imageUrl: Article1,
      date: "March 2024",
      url: "https://medium.com/@alexandrameija/why-i-became-a-techie-and-launched-a-new-careerpath-after-40-e853fdba98e4" // Add the article's URL here
    },
 
 
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
    date={article.date}
    url={article.url} // Pass the url to each ArticleCard
  />
))}
      </div>
    </div>
  );
}

export default Presentation;

