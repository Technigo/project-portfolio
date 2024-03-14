import React, { useState } from 'react';

export const Header = (props) => {
  // State variable to control header visibility
  const [showHeader, setShowHeader] = useState(false);

  // Function to toggle header visibility
  const toggleHeader = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setShowHeader(!showHeader);
  };

  return (
    <div style={{ position: 'fixed', zIndex: '3000', color: 'yellow', backgroundColor: 'black' }}>
      {/* Button to toggle header */}
      <button onClick={(e) => toggleHeader(e)} style={{backgroundColor: 'yellow'}}>
        {showHeader ? 'not now' : 'contact me'}
      </button>

      {/* Conditionally render the header */}
      {showHeader && (
        <div>
          <p>{props.name}</p>
          <p>{props.email}</p>
          <p>
            |<a href={props.linkedinLink}>linkedin</a>|
            <a href={props.githubLink}>github</a>|
            <a href={props.stackoverflowLink}>stackoverflow</a>|
          </p>
        </div>
      )}
    </div>
  );
};

//add navigation links?