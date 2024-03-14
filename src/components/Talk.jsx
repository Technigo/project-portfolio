import React, { useState } from 'react';

// Import your images
import mig from './mig.jpg';
import linkedindefault from './linkedindefault.png';
import linkedinhover from './linkedinhover.png';
import githubdefault from './githubdefault.png';
import githubhover from './githubhover.png';
import stackoverflowdefault from './stackoverflowdefault.png';
import stackoverflowhover from './stackoverflowhover.png';
import twitterdefault from './twitterdefault.png';
import twitterhover from './twitterhover.png';
import instagramdefault from './instagramdefault.png';
import instagramhover from './instagramhover.png';

const SocialMediaIcon = ({ defaultImage, hoverImage, link }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ display: 'inline-block', margin: '0 10px' }}
            >
                {isHovered ? <img src={hoverImage} alt="hover" /> : <img src={defaultImage} alt="default" />}
            </div>
        </a>
    );
};

export const Talk = (props) => {
    return (
        <div>
            <div style={{ fontSize: '70px', color: 'blue', paddingLeft: '250px', paddingTop: '100px', paddingBottom: '100px' }}><strong>Let's talk</strong></div> {/* Add paddingTop and paddingBottom here */}
            <div style={{ display: 'inline-block', marginRight: '10px', textAlign: 'left', paddingLeft: '250px' }}>
                <img src={mig} alt="picture of me" width="150px" height="150px" style={{ borderRadius: '50%', objectFit: 'cover' }} />
            </div>
            <div style={{ fontSize: '25px', paddingLeft: '250px', paddingTop: '35px', paddingBottom: '35px' }}>
                <strong>{props.name}<br />+46(0)000 00 00 00<br />{props.email}</strong>
            </div>
            <div style={{paddingLeft: '250px', paddingBottom: '100px'}}>
                {/* Render social media icons with links */}
                <SocialMediaIcon defaultImage={linkedindefault} hoverImage={linkedinhover} link="https://www.linkedin.com" />
                <SocialMediaIcon defaultImage={githubdefault} hoverImage={githubhover} link="https://www.github.com" />
                <SocialMediaIcon defaultImage={stackoverflowdefault} hoverImage={stackoverflowhover} link="https://stackoverflow.com" />
                <SocialMediaIcon defaultImage={twitterdefault} hoverImage={twitterhover} link="https://www.twitter.com" />
                <SocialMediaIcon defaultImage={instagramdefault} hoverImage={instagramhover} link="https://www.instagram.com" />
                {/* Add more social media icons with links here... */}
            </div>
            <div style={{backgroundColor: '#FF4575', color: 'white', paddingTop: '20px', paddingBottom: '20px', marginLeft: '35%', marginRight: '12%', letterSpacing: '1px'}}>{props.name} · {props.job} · {props.name} · {props.job}</div>
        </div>
    );
};
