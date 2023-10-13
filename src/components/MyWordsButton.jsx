import React from 'react';

export const MyWordsButton = ({ mywords }) => {
    return (
        <div className="mywords-wrapper">
            <div className="mywords-wrapper">
                <a href={mywords.articleBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="link to the GitHub repository"
                >
                    <button type="button">
                        <img src={mywords.articleBtn} alt="GitHub" />

                    </button>

                </a>
            </div>
        </div>
    );
};
