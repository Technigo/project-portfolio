import React from "react";

export const Introduction = () => {
  return (
    <div className="header_text_container">
      <div className="header_text">
        <h3 className="header_myname">Hi, I'm Stenli Suryadinata</h3>
        <h1 className="title">Frontend Developer</h1>
      </div>
      <div className="image_text">
        <img
          src="https://res.cloudinary.com/stenli-suryadinata/image/upload/v1554368724/download.png"
          className="image_profile"
          alt="Stenli's_photo"
        ></img>
        <p className="header_text_description">
          Stenli is an exceptional developer known for his innovative solutions and exceptional coding abilities. He creates user-friendly applications and solves complex issues with ease. His drive for excellence makes him a valuable asset to any project and a standout in the technology field.
        </p>
      </div>
      <div className="header_arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="68"
          viewBox="0 0 29 68"
          fill="none"
        >
          <path
            d="M24 23.5L14.5 33M14.5 33L5 23.5M14.5 33L14.5 3"
            stroke="#FF4575"
            strokeWidth="6"  
            strokeLinecap="square" 
            strokeLinejoin="round"   
          />
        </svg>
      </div>
    </div>
  );
};
