import React from 'react';
import './TechSkillsComponent/tech.css';
import { HeaderText } from './HeaderComponents/HeaderText';

export const SkillsText = () => {
    return (
        <div className='techContainer'>

            <div className='SkillsContainer'>

                <HeaderText h1Text="Skills" />

                <li className='listOne'>

                    <ul>
                        <h3>Code</h3>
                    </ul>
                    <ul>
                        someting
                    </ul>
                    <ul>
                        someting
                    </ul>
                </li>
            </div>

            <li className='listTwo'>
                <ul>
                    <h3>Toolbox</h3>
                </ul>
                <ul>
                    someting
                </ul>
                <ul>
                    someting
                </ul>
            </li>

            <li className='listTree'>
                <ul>
                    <h3>Upcoming</h3>
                </ul>
                <ul>
                    someting
                </ul>
                <ul>
                    someting
                </ul>
            </li>
        </div>





    );
}
