import React, { useState, useEffect } from 'react';
import './TechComponents/tech.css';
import { HeaderText } from './HeaderComponents/HeaderText';


export const TechText = () => {
    return (
        <div className='techContainer'>
            <HeaderText
                h1Text="Tech"
                h2Text="HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks,
                Node.js, Mongo DB, Web Accessibility, APIs, mob-programming,
                pair-programming, GitHub."
            />

        </div>

    )
}