import React from "react";
import "./Img.css";
import ImageRed from "../assets/ImageRed.jpeg";
import ImageGrey from "../assets/ImageGrey.jpeg";
import ImagePink from "../assets/ImagePink.jpeg";

const Img = () => {
  return (
    <section className="image-section">
      <img src={ImageGrey} alt="Abstract art" className="image-grey" />
      <img src={ImagePink} alt="Abstract art" className="image-pink" />
      <img src={ImageRed} alt="Abstract art" className="image-red" />
    </section>
  );
};

export default Img;
