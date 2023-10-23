import React from 'react';

//Subpresentation containing pic and presentation text
export const HeaderImg = ({ src, alt, pText }) => {
    return (
        <figure className='subPresentation'>
            <img src={src} className="CvPic" alt="Picture of Isa Robertini" />
            <p>{pText}</p>
        </figure>
    );
}


