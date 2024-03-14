// Divider.js
import React from 'react';

const Divider = ({ imagePath, altText, width, height, count }) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const dividerStyle = {
    width: width || '100%', // Default to 100% width
    height: height || 'auto', // Default to auto height (maintain aspect ratio)
  };

  const dividers = [];
  for (let i = 0; i < count; i++) {
    dividers.push(<img key={i} src={imagePath} alt={altText} style={dividerStyle} />);
  }

  return (
    <div style={containerStyle}>
      {dividers}
    </div>
  );
};

export default Divider;
