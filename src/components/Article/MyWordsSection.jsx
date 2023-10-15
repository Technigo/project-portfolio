import React from 'react';
import { MyWordsCard } from './MyWords'; // Corrected the import
import { HeaderText } from '../HeaderComponents/HeaderText';
import CurlyDevider from './divider.png'

export const MyWordsSection = ({ mywords }) => {
    return (
        <div className='MyWordsMap'>

            <div className="divider">
                <img src={CurlyDevider} alt="" aria-label="Decorative curly divider" aria-hidden="true" />
            </div>

            <div className="myword-header-wrapper">
                <HeaderText h1Text="My Words" />
            </div>

            <div className="myword-card-container">
                {mywords.map((myword, index) => ( // Changed MyWordsCard to mywords and variable names
                    <div key={index}>
                        <MyWordsCard mywords={myword} /> {/* Changed MyWordsCard to mywords and variable names */}
                    </div>
                ))}
            </div>
        </div>
    );
};