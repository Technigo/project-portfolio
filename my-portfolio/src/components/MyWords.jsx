import React from "react";
import "./MyWords.css";
import ImagePink from "../assets/ImagePink.jpeg";
import ImageGrey from "../assets/ImageGrey.jpeg";
import ImageRed from "../assets/ImageRed.jpeg";

const MyWords = () => {
  return (
    <div className="my-words-container">
      <h2>My Words</h2>

      <div className="words-images">
        <div className="words-item">
          <img src={ImagePink} alt="Pink themed image" className="words-image" />
          <div className="word-text">
            <h3>How to stop being scared:
            Learning to love code</h3>
            <p>The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.</p>          
          </div>
        </div>

        <div className="words-item">
          <img src={ImageGrey} alt="Grey themed image" className="words-image" />
          <div className="word-text">
            <h3>How to stop being scared:
            Learning to love code</h3>
            <p>The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.</p>  
          </div>
        </div>

        <div className="words-item">
          <img src={ImageRed} alt="Red themed image" className="words-image" />
          <div className="word-text">
            <h3>How to stop being scared:
            Learning to love code</h3>
            <p>The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.</p>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWords;
