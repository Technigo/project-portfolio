import React, { useState, useEffect } from 'react';
import './TechSkillsComponent/tech.css';
import { HeaderText } from './HeaderComponents/HeaderText';


export const SkillsText = () => {
    return (
        <div className='techContainer'>
            <div className='techContainerWidth'></div>
            <HeaderText
                h1Text="Skills"
                h2Text="Here I will write my skills.Here I will write my skills.Here I will write my skills.Here I will write my skills.Here I will write my skills.Here I will write my skills."
            />
        </div>


    )
}