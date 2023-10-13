import React from 'react';
import './MyWords.css';
import { MyWordsButton } from './MyWordsButton';

export const MyWordsCard = ({ mywords }) => {
    return (

        <div className='MyWords-container'>
            <div className="MyWords-item">
                <img className="MyWords-img" src={mywords.image} width={
                    564} height={340} alt="MyWords Image" />

                <div className="MyWords-description">
                    <p className="project-tags">{mywords.tags}</p>
                    <h2 className="MyWords-title">{mywords.name}</h2>
                    <p>{mywords.description}</p>
                </div>
                <div className="project-buttons">
                    <MyWordsButton mywords={mywords} />

                </div>
            </div>
        </div>
    );
};

