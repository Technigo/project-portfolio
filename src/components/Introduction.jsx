import mig from './mig.jpg';

export const Introduction = (props) => {
    const containerStyle = {
        marginLeft: '35%', // Adjust the percentage as needed
    };

    return (
        <div style={containerStyle}>
            <p style={{ fontSize: '25px', textAlign: 'left' }}>
                <strong>Hi, I'm {props.name}</strong>
            </p>
            <p style={{ color: 'blue', fontSize: '70px', marginTop: '-50px', textAlign: 'left' }}>
                <strong>Frontend Developer</strong>
            </p>
            <div style={{ display: 'inline-block', marginRight: '20%', marginTop: '-80px', textAlign: 'left' }}>
                <img src={mig} alt="picture of me" width="150px" height="150px" style={{ borderRadius: '50%', objectFit: 'cover', float: 'left', marginRight: '10px' }} />
                <p style={{ fontSize: '10px' }}>{props.description}</p>
            </div>
            <div style={{color: 'rgb(235, 85, 118)'}}>⬇</div>
        </div>
    );
};
