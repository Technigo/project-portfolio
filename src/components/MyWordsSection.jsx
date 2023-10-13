import React from 'react';
import { MyWordsCard } from './MyWords'; // Corrected the import
import { HeaderText } from './HeaderComponents/HeaderText';

export const MyWordsSection = ({ mywords }) => {
    return (
        <div>
            <HeaderText h1Text="My Words" />

            {mywords.map((myword, index) => ( // Changed MyWordsCard to mywords and variable names
                <div key={index}>
                    <MyWordsCard mywords={myword} /> {/* Changed MyWordsCard to mywords and variable names */}
                </div>
            ))}
        </div>
    );
};

