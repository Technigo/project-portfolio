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
      background: 'none',
      color: 'black',
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
      marginTop: '-63.25%',
    };
  
    const thirdImageStyle = {
      width: '20%',
      height: 'auto',
      marginLeft: 'X%', // Adjust X% as needed
      marginTop: 'Y%', // Adjust Y% as needed
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
  
    // Description styles for the first and second descriptions
    const firstDescriptionStyle = {
      fontSize: '10px',
      marginLeft: '35%',
      marginRight: '550px', // Move the second description to the right
      textAlign: 'left',
    };
  
    const secondDescriptionStyle = {
      fontSize: '10px',
      marginLeft: '60%',
      marginRight: '200px',
      textAlign: 'left',
    };
  
    const secondTitleStyle = {
      fontSize: '14px',
      marginLeft: '290px',
    };
  
    return (
      <div style={containerStyle}>
        <div style={titleStyle}><strong>My Words</strong></div>
        <img src={props.wordsData[0].image} alt="" style={imageStyle} />
        <div style={tagContainerStyle}>
          <div style={firstTagItemStyle}>{props.wordsData[0].tags}</div>
        </div>
        <div style={titleStyle}>
          <strong>{props.wordsData[0].title}</strong>
        </div>
        <div style={firstDescriptionStyle}>{props.wordsData[0].description}</div>
        {/* Display the "bild" image under the first description */}
        <img src={props.wordsData[2].image} alt="" style={imageStyle} />
        <div style={tagContainerStyle}>
          <div style={secondTagItemStyle}>{props.wordsData[2].tags}</div>
        </div>
        <div style={secondTitleStyle}>
          <strong>{props.wordsData[2].title}</strong>
        </div>
        <div style={secondDescriptionStyle}>{props.wordsData[2].description}</div>
        {/* Add margin to the second image */}
        <img src={props.wordsData[1].image} alt="" style={secondImageStyle} />
        <div style={tagContainerStyle}>
          <div style={secondTagItemStyle}>{props.wordsData[1].tags}</div>
        </div>
        <div style={{ ...titleStyle, ...secondTitleStyle }}>
          <strong>{props.wordsData[1].title}</strong>
        </div>
        <div style={secondDescriptionStyle}>{props.wordsData[1].description}</div>
      </div>
    );
  };
  