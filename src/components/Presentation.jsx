import React, { useState } from 'react';
import './Presentation.css';
import ArticleCard from './ArticleCard';
import Article1 from '../assets/Article1.jpg'; 
import Article2 from '../assets/Article2.jpg'; 

function Presentation() {
  const [presentationText, setPresentationText] = useState(
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
