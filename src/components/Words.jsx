export const Words = (props) => {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Center align items horizontally
      textAlign: 'center', // Center align text
    };
  
    const imageStyle = {
      width: '20%', // Adjust the image width as needed
      height: 'auto',
    };
  
    const tagContainerStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center', // Center align tags horizontally
      marginTop: '10px', // Add space to the top of tags
    };
  
    const tagItemStyle = {
      backgroundColor: 'black',
      color: 'white',
      padding: '4px 8px',
      marginRight: '8px',
      marginBottom: '8px',
      fontSize: '14px',
    };
  
    return (
      <div style={containerStyle}>
        <div>My words</div>
        <img src={props.wordsImage} alt="" style={imageStyle} />
        <div style={tagContainerStyle}>
          {props.wordsTags.map((tag, index) => (
            <div key={index} style={tagItemStyle}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    );
  };
  