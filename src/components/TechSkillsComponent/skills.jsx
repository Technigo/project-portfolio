import React from 'react';
import './skills.css';
import { HeaderText } from '../HeaderComponents/HeaderText';
import { SkillsList } from './skillsList';

//Get skilltext component from header, add skill list
export const SkillsText = () => {
    return (
        <div className='skillsContainer'>
            <div className='Skills-header-wrapper'>
                <HeaderText h1Text="Skills" />
            </div>
            <SkillsList />
        </div>

    );
}
