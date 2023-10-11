export const Words = (props) => {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: '20px',
    };
  
    const titleStyle = {
      marginBottom: '10px',
      fontSize: '14px',
      marginLeft: '-18%',
      background: 'none', // Remove background color
      color: 'black', // Set text color to black
    };
  
    const imageStyle = {
      width: '20%',
      height: 'auto',
      marginLeft: '-10%',
    };
  
    const secondImageStyle = {
      width: '20%',
      height: 'auto',
      marginLeft: '40%',
      marginTop: '-27.85%',
    };
  
    const tagContainerStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: '10px',
    };
  
    const tagItemStyle = {
      backgroundColor: 'black',
      color: 'white',
      padding: '4px 8px',
      marginRight: '220px',
      marginBottom: '8px',
      fontSize: '14px',
    };
  
    const firstTagItemStyle = {
      ...tagItemStyle,
      marginLeft: '575px',
    };
  
    const secondTagItemStyle = {
      ...tagItemStyle,
      marginLeft: '-55px',
    };
  
    const descriptionStyle = {
      fontSize: '10px',
      marginLeft: '35%',
      marginRight: '40%',
      textAlign: 'left',
    };
  
    const secondTitleStyle = {
      fontSize: '14px', // Adjust font size
      marginLeft: '290px', // Move the second title to the right
    };
  
    const secondDescriptionStyle = {
        fontSize: '10px',
        marginLeft: '60%', // Keep the original left margin
        marginRight: '170px', // Add right margin to move the second description to the right
        textAlign: 'left', // Align the second description to the right
      };
      
  
    return (
      <div style={containerStyle}>
        <div style={titleStyle}><strong>My Words</strong></div>
        <img src={props.wordsData[0].image} alt="" style={imageStyle} />
        <div style={tagContainerStyle}>
          <div style={firstTagItemStyle}>
            {props.wordsData[0].tags}
          </div>
        </div>
        {/* Display the title for the first set of words under the first tag */}
        <div style={titleStyle}> {/* Apply the titleStyle */}
          <strong>{props.wordsData[0].title}</strong>
        </div>
        <div style={descriptionStyle}>{props.wordsData[0].description}</div>
        <img src={props.wordsData[1].image} alt="" style={secondImageStyle} />
        <div style={tagContainerStyle}>
          <div style={secondTagItemStyle}>
            {props.wordsData[1].tags}
          </div>
        </div>
        {/* Display the title for the second set of words under the second tag */}
        <div style={{ ...titleStyle, ...secondTitleStyle }}> {/* Apply both styles */}
          <strong>{props.wordsData[1].title}</strong>
        </div>
        {/* Display the second description */}
        <div style={{ ...descriptionStyle, ...secondDescriptionStyle }}>
          {props.wordsData[1].description}
        </div>
      </div>
    );
  };
  