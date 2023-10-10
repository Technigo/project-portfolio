// Header component

import React from 'react';

const Header = () => {
    return (
        <header className="header">
            {/* Video goes here */}
            <video autoPlay loop muted className="header-video">
                <source src="code.mp4" type="video/mp4" />
                {/* Add additional source elements for different video formats */}
            </video>
            {/* Other content goes here */}
        </header>
    );
};

export default Header;

