// import 'animate.css'

// import napkin from './napkin.jpg'

// export const Tech = () => {
//     return(
//         <div className="animate_animated animate__wobble" style={{backgroundImage: `url(${napkin})`, padding: `100px`, color: 'yellow'}}>
//         <h1>what i want to do while we work together</h1>
//         <p>HTML, CSS, JavaScript, React, mob-programming, pair-programming</p>
//       </div>
//     )
// }


import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import napkin from './napkin.jpg'

export const Tech = () => {
  return (
    <ScrollAnimation animateIn="zoomIn" duration={1}>
      <div style={{backgroundImage: `url(${napkin})`, padding: '100px', color: 'yellow'}}>
        <h1>what I want to do while we work together</h1>
        <p>HTML, CSS, JavaScript, React, mob-programming, pair-programming</p>
      </div>
    </ScrollAnimation>
  );
};
