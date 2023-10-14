import React from 'react';
import './tech.css';
import { HeaderText } from '../HeaderComponents/HeaderText';

export const TechText = () => {
    return (

        <div className='techContainer'>
            <div className='techContainerWidth'>
                <HeaderText
                    h1Text="Tech"
                    h2Text="HTML, CSS, Flexbox, JavaScript, Es60
                    JSX, React, React Hooks, Node.js,
                    Mongo DB, Web Accessibility, APIs,
                    mob-programming, pair-programming, 
                    Github."
                />
            </div>
        </div>
    );
};

