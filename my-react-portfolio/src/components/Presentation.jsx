import React, { useState } from 'react';

function Presentation() {
  const [presentationText, setPresentationText] = useState(
    "Ever since I was young I've always had an urge to do new things and explore new paths. After slowly transitioning towards tech in my work learning code came like a natural step. I like working remotely, but like going into the office now and again to see colleagues."

  );

  return (
    <div className="presentation">
    <h2 className="presentationh2">My words</h2>
    <p className="presentation-paragraph">{presentationText}</p>
  </div>
  );
}

export default Presentation;
