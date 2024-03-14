import React from 'react';

export const Skills = (props) => {
  const { title, sections } = props;

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row', // Display sections side by side
    justifyContent: 'space-between', // Add space between sections
    alignItems: 'flex-start', // Align sections at the top
    textAlign: 'center',
    marginLeft: '35%', // Adjust the percentage as needed
    marginRight: '12%', // Adjust the percentage as needed
    background: 'blue', // Blue background color for the container
    color: 'white', // White text color for the container
    padding: '20px', // Add padding for better visibility
  };

  const titleStyle = {
    background: 'blue', // Dark blue background color for the "Skills" title
    color: 'white', // White text color for the "Skills" title
    borderRadius: '8px', // Add border radius for a rounded look
    fontSize: '70px', // Increase the font size to make it bigger
    fontWeight: 'bold', // Add fontWeight for a bolder text
    paddingLeft: '200px'
  };

  const sectionStyle = {
    width: '20%', // Adjust the width as needed
    padding: '20px',
    marginBottom: '20px',
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
  };

  const listItemStyle = {
    marginLeft: '20px',
  };

  const titleStyles = {
    Code: {
      background: 'red', // Red background color for 'Code' section title
      marginRight: '-20px'
    },
    Toolbox: {
      background: 'lightblue', // Light blue background color for 'Toolbox' section title
      width: '130%'
    },
    Upcoming: {
      background: 'green', // Green background color for 'Upcoming' section title
      width: '130%',
      marginLeft: '5px'
    },
    More: {
      background: 'yellow', color: 'blue', // Yellow background color for 'More' section title
      marginLeft: '20px'
    },
  };

  return (
    <div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div style={{ ...titleStyles.Skills, ...containerStyle }}>
        <strong style={titleStyle}>{title}</strong>
      </div>
      <div style={containerStyle}>
        {sections.map((section, index) => (
          <div key={index} style={sectionStyle}>
            <h2 style={titleStyles[section.name]}>{section.name}</h2>
            <ul style={listStyle}>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} style={listItemStyle}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
