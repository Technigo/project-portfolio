export const Technology = (props) => {
    const containerStyle = {
        marginLeft: '35%', // Adjust the percentage as needed
        marginRight: '12%',
    };

    const techContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'blue',
        color: 'white',
        marginTop: '10%',
        marginBottom: '10%',
        padding: '100px', // Optional: Add padding to the content area
    };

    const techTitleStyle = {
        fontSize: '40px', // Adjust the font size as needed
        marginRight: '10%'
    };

    return (
        <div style={containerStyle}>
            <div style={techContainerStyle}>
                <span style={techTitleStyle}><strong>Tech</strong></span> 
                <span style={{ textAlign: 'right', flex: '1' }}>{props.techDescription}</span>
            </div>
        </div>
    );
}
