import React from 'react';

export const MyWordsCard = ({ mywords }) => {
    return (
        <div className="MyWordsWrapper">
            <div className="MyWordsContainer">
                <div className="project-item">
                    <img className="MyWords-img" src={mywords.image} alt="MyWords Image 1" />
                    <div className="project-description">
                        <h2 className="project-title">{mywords.name}</h2>
                        <p>{mywords.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
