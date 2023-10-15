import React from 'react';

export const HeaderImg = ({ src, alt, pText }) => {
    return (
        <figure className='subPresentation'>
            <img src={src} className="CvPic" alt="Picture of Isa Robertini" />
            <p>{pText}</p>
        </figure>
    );
}


