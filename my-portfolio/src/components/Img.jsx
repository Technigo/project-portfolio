import React from "react";
import "./Img.css";
import computerImage from "../assets/computer.jpg";

const Img = () => {
  return (
    <section className="computer-section">
 <img src={computerImage} alt="Computer" className="computer-image" />
    </section>
  );
};

export default Img;