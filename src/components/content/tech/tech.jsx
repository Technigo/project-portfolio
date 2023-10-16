//NOT DONE:
//write text
//Extra blue box in the corner??

//import {useState, useEffect} from "react"
import style from './tech.module.css'
import { SubHeader } from '../../reusable/subheader/subheader.jsx'
import { MainHeader } from '../../reusable/mainheader/mainheader.jsx'

export const Tech = () => {

    return (
        <div className={style.techBox}>
            <MainHeader
                mainHeading="Tech"
                className={style.h1}
            />
            <div >
                <SubHeader
                    className={style.h2}
                    subHeading="text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text"
                />
            </div>
        </div>
    )
}
