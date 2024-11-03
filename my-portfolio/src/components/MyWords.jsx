import React from "react";
import "./MyWords.css";
import ImagePink from "../assets/ImagePink.jpeg";
import ImageGrey from "../assets/ImageGrey.jpeg";
import ImageRed from "../assets/ImageRed.jpeg";

const MyWords = () => {
  return (
    <div className="my-words-container">
      <h2>My Words</h2>
      <div className="images-container">
        <img src={ImagePink} alt="Pink themed image" className="image-pink" />
        <img src={ImageGrey} alt="Grey themed image" className="image-grey" />
        <img src={ImageRed} alt="Red themed image" className="image-red" />
      </div>
    </div>
  );
};

export default MyWords;
