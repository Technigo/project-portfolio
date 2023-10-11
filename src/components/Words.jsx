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
      marginTop: '-13.40%',
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
      marginLeft: '260px',
    };
  
    const secondTagItemStyle = {
      ...tagItemStyle,
      marginLeft: '-10px',
    };
  
    const descriptionStyle = {
      fontSize: '10px',
      marginLeft: '35%',
      marginRight: '40%',
      textAlign: 'left',
    };
  
    return (
      <div style={containerStyle}>
        <div style={titleStyle}><strong>My Words</strong></div>
        <img src={props.wordsData[0].image} alt="" style={imageStyle} />
        <img src={props.wordsData[1].image} alt="" style={secondImageStyle} />
        <div style={tagContainerStyle}>
          <div style={firstTagItemStyle}>
            {props.wordsData[0].tags}
          </div>
          <div style={secondTagItemStyle}>
            {props.wordsData[1].tags}
          </div>
        </div>
        <div style={titleStyle}><strong>{props.wordsData[0].title}</strong></div>
        <div style={descriptionStyle}>{props.wordsData[0].description}</div>
      </div>
    );
  };
  