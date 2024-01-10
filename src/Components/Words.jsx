import React from 'react';
import './Words.css';
import article1Image from '../assets/article1.jpg';
import article2Image from '../assets/article2.jpg';
import divider from '../assets/divider.jpg';
import docIcon from '../assets/Doc.jpg';

const Words = () => {
  return (
    <div className="words-container">
      <img className="divider" src={divider} alt="Divider" />
      <h1>My words</h1>
      <div className="articles-container">
        <div className="article">
          <img src={article1Image} alt="Article 1" className="article-image" />
          <p className="article-date">July 2023</p>
          <h2>How to stop being scared: Learning to love code</h2>
          <p>Writing code is less about “just working”. Instead, it's much more about creativity. It's similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.</p>
          <button className="read-article-btn">
          <img src={docIcon} alt="Document" className="button-icon" />
          Read article
          </button>
        </div>
        <div className="article">
        <img src={article2Image} alt="Article 2" className="article-image" />
          <p className="article-date">July 2023</p>
          <h2>How to stop being scared: Learning to love code</h2>
          <p>Writing code is less about “just working”. Instead, it's much more about creativity. It's similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective.</p>
          <button className="read-article-btn">
          <img src={docIcon} alt="Document" className="button-icon" />
          Read article
          </button>
        </div>
      </div>
    </div>
  );
};

export default Words;
