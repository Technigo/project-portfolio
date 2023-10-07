import React, { useState } from 'react';

function TopSection() {
  // Define a state variable for the introductory text
  const [introText, setIntroText] = useState("Hi, I'm Alexandra Meija");

  // Placeholder image URL (replace with your actual image URL)
  const placeholderImageURL = 'https://via.placeholder.com/150';

  // Paragraph text
  const paragraphText =
    "Alexandra identifies herself as a coder with exceptional adjustment skills. She comes from a background in records management and later on project management. In the future, she sees herself combining those skills with her new coding experience.";

  return (
    <div>
      <img src={placeholderImageURL} alt="Your Name" />
      <h1>{introText}</h1>
      <h2>A project manager/records manager with coding skills.</h2>
      <p>{paragraphText}</p>
    </div>
  );
}

export default TopSection;
