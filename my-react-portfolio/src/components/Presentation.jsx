import React, { useState } from 'react';

function Presentation() {
  const [presentationText, setPresentationText] = useState(
    "Presenting yourself and your thoughts about programming, career change, remote work, and bootcamping can be extremely helpful for recruiters to gain insight into what you're up to. It can be a great way to show off your knowledge and skills - and that you reflect on it."
  );

  return (
    <div>
      <h2>Presentation</h2>
      <p>{presentationText}</p>
    </div>
  );
}

export default Presentation;
