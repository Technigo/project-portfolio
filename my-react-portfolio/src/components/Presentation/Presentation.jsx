import React from 'react';
import './Presentation.css';

// const Presentation = ({ headlineText, contentText }) => (
//   <div className="presentation">
//     <h1 className="headline">{headlineText}</h1>
//     <p className="content">{contentText}</p>
//   </div>
// );

// export default Presentation;



// export const Presentation = () => {
//   return (
//     <div>Presentation</div>
//   )
// }

export const Presentation = () => {
  return (
    <div className="presentation-container">
        <img src="top_image.jpg" alt="Top Image" className="top-image"/>
        <h3>Hi, i'm Manne Johansson</h3>
        <h1>Frontend Developer</h1>
        <p className="small-text">Lorem ipsum</p>
        <img src="bottom_image.jpg" alt="Bottom Image" className="bottom-image"/>
    </div>
  );
}
