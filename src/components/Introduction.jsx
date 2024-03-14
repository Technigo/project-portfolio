import React, { useState } from 'react'

import mig from './mig.jpg';
import up from './up.png'
import down from './down.png'

export const Introduction = (props) => {
    const [isHovered, setIsHovered] = useState(false)
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
            <div
                style={{ marginBottom: '-60px' }}
                onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
                onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
            >
                {isHovered ? <img src={down} alt="down" /> : <img src={up} alt="up" />}
            </div>
        </div>
    );
};
