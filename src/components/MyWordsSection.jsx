import React from 'react';
import { MyWordsCard } from './MyWords'; // Corrected the import
import { HeaderText } from './HeaderComponents/HeaderText';

export const MyWordsSection = ({ mywords }) => {
    return (
        <div className='MyWordsMap'>
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