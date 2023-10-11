export const Words = (props) => {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Center align vertically
      textAlign: 'center', // Center-align the text
    };
  
    const titleStyle = {
      marginBottom: '10px', // Add space below the title
      fontSize: '14px', // Set the font size for the title to 14px
      marginLeft: '-19%', // Move the title a bit to the left
    };
  
    const imageStyle = {
      width: '20%', // Adjust the image width as needed
      height: 'auto',
      marginLeft: '-10%', // Move the image a bit to the left
    };
  
    const tagContainerStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start', // Align tags to the left
      alignItems: 'flex-start', // Align tags to the top
      marginTop: '10px', // Add space to the top of tags
      marginLeft: '-21%', // Move the tags a bit to the left
    };
  
    const tagItemStyle = {
      backgroundColor: 'black',
      color: 'white',
      padding: '4px 8px',
      marginRight: '8px',
      marginBottom: '8px',
      fontSize: '14px',
    };
  
    const descriptionStyle = {
      fontSize: '10px', // Set the font size for the description to 10px
    };
  
    return (
      <div style={containerStyle}>
        <img src={props.wordsImage} alt="" style={imageStyle} />
        <div style={tagContainerStyle}>
          {props.wordsTags.map((tag, index) => (
            <div key={index} style={tagItemStyle}>
              {tag}
            </div>
          ))}
        </div>
        <div style={titleStyle}>{props.wordsTitle}</div> {/* Display the title */}
        <div style={descriptionStyle}>{props.wordsDescription}</div> {/* Display the description */}
      </div>
    );
  };
  