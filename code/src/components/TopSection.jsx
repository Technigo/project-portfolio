import React from 'react';

const TopSection = () => {
    return (
        <div className="header">
            <div className="video-container">
                <video autoPlay muted loop className="video-bg">
                    <source src="code.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="content">
                <h2>Hi, I'm Lisa Dahlkar</h2>
                <h1>Front End Developer</h1>
                <img className="img-me" src="Lisa.JPG" alt="A picture of Lisa Dahlkar" />
                <p>hejhej text lalalal</p>
            </div>
        </div>
    );
};

export default TopSection;


