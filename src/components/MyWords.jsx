import React from 'react';
import './MyWords.css';

export const MyWordsCard = ({ mywords }) => {
    return (

        <div className='MyWords-container'>
            <div className="MyWords-item">
                <img className="MyWords-img" src={mywords.image} width={100} alt="MyWords Image" />
                <div className="MyWords-description">
                    <h2 className="MyWords-title">{mywords.name}</h2>
                    <p>{mywords.description}</p>
                </div>
            </div>
        </div>
    );
};

