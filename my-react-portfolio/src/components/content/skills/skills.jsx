//import {useState, useEffect} from "react"
import style from './skills.module.css'
import { SubHeader } from '../../reusable/subheader/subheader.jsx'
import { MainHeader } from '../../reusable/mainheader/mainheader.jsx'

export const Skills = () => {

    return (
        <div>
            <div className={style.skillBox}>
                <MainHeader mainHeading="Skills" className={style.h1} />
                <div className={style.innerBox}>
                    <div className={style.skillList}>
                        <SubHeader className={style.headerCode} subHeading="Code">
                            <p className={style.commonP}>Text for Article 1</p>
                        </SubHeader>
                    </div>
                    <div className={style.skillList}>
                        <SubHeader className={style.headerToolbox} subHeading="Toolbox">
                            <p className={style.commonP}>Text for Article 2</p>
                        </SubHeader>
                    </div>
                    <div className={style.skillList}>
                        <SubHeader className={style.headerUpcoming} subHeading="Upcoming">
                            <p className={style.commonP}>Text for Article 3</p>
                        </SubHeader>
                    </div>
                    <div className={style.skillList}>
                        <SubHeader className={style.headerMore} subHeading="More">
                            <p className={style.commonP}>Text for Article 4</p>
                        </SubHeader>
                    </div>
                </div>
            </div>
        </div >
    )
}