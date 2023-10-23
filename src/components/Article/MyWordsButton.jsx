import React from 'react';

//Gets the buttons from mywords.json file
export const MyWordsButton = ({ mywords }) => {
    return (
        <div className="mywords-container">
            <div className="mywords-wrapper">

                <a href={mywords.articleLink} target="_blank" rel="noopener noreferrer">
                    <button role="button" tabIndex="0">
                        <img src={mywords.articleBtn} alt={`Click here to read the article: ${mywords.articleTitle}`} />
                    </button>
                </a>

            </div>
        </div>
    );
};
