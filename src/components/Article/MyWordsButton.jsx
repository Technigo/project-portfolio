import React from 'react';

export const MyWordsButton = ({ mywords }) => {
    return (
        <div className="mywords-container">
            <div className="mywords-wrapper">

                <a href="">
                    <button role="button" tabindex="0" onclick="yourFunction()">
                        <img src={mywords.articleBtn} alt="Description of the image" />
                    </button>
                </a>

            </div>
        </div>
    );
};
