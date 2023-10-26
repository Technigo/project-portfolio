import React, { useState } from 'react';
import './Presentation.css';
import ArticleCard from './ArticleCard';
import Article1 from '../assets/Article1.jpg'; 
import Article2 from '../assets/Article2.jpg'; 

function Presentation() {
  const [presentationText, setPresentationText] = useState(
    "Ever since I was young I've always had an urge to do new things and explore new paths. After slowly transitioning towards tech in my work learning code came like a natural step. I like working remotely, but like going into the office now and again to see colleagues."
  );

  return (
    <div className="presentation">
      <h2 className="presentationh2">My words</h2>
      <p className="presentation-paragraph">{presentationText}</p>
      <div className="articles-grid">
        <ArticleCard title="Article 1" description="Content to come" imageUrl={Article1} />
        {/* Replace the path/to/image2.jpg with the appropriate image URL */}
        <ArticleCard title="Article 2" description="Content to come" imageUrl={Article2} />
        {/* Add more ArticleCard components as necessary */}
      </div>
    </div>
  );
}

export default Presentation;
