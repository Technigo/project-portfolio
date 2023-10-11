export const Projects = ({ projectItems }) => {
    const containerStyle = {
      marginLeft: '35%', // Adjust the percentage as needed
      marginRight: '12%',
    };
  
    const projectContainerStyle = {
      display: 'flex',
      alignItems: 'flex-start', // Align items to the top
      marginTop: '10%',
      marginBottom: '10%',
      padding: '20px', // Adjust padding as needed
    };
  
    const imageContainerStyle = {
      backgroundColor: 'blue', // Set your desired background color here
      padding: '10px', // Optional: Add padding to the image container
      width: '30%', // Set the desired width of the image container
    };
  
    const imageStyle = {
      width: '100%',
      height: 'auto',
      display: 'block', // Remove any residual whitespace below the image
      float: 'right', // Float the image to the right
      marginTop: '-10px', // Move the image upward
      marginRight: '-10px', // Move the image to the right
    };
  
    return (
      <div style={containerStyle}>
        <div>
          Featured Projects
          {projectItems.map((item, index) => (
            <div key={index} style={projectContainerStyle}>
              <div style={imageContainerStyle}>
                <img src={item.image} style={imageStyle} alt={item.name} />
              </div>
              <div>
                <div>{item.name}</div>
                <div>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  