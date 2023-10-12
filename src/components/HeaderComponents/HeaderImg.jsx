import React from 'react';

export const HeaderImg = ({ src, alt, pText }) => {
    return (
        <div className='subPresentation'>
            <img src={src} className="CvPic" alt={alt} />
            <p>{pText}</p>
        </div>
    );
}


