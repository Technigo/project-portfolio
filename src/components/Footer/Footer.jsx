import React from 'react';
import './Footer.css';
import Image1 from './assets/TickerTape.svg';
import Image2 from './assets/TickerTape.svg';

export const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="ticker">
                <img src={Image1} alt="Image 1" className="ticker-item"/>
                <img src={Image2} alt="Image 2" className="ticker-item"/>

                <img src={Image1} alt="Image 1" className="ticker-item"/>
                <img src={Image2} alt="Image 2" className="ticker-item"/>

            </div>
        </footer>
    );
}
