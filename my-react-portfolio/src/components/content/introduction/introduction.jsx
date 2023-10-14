//import {useState, useEffect} from "react"
import style from './introduction.module.css'
import { SubHeader } from '../../reusable/subheader/subheader.jsx'
import { MainHeader } from '../../reusable/mainheader/mainheader.jsx'

// Function to display profile picture and text in the introduction section:
export const Introduction = () => {

    return (
        <div className={style.introBox}>
            <MainHeader
                mainHeading="Frontend Development"
                className={style.h1}
            />
            <div className={style.innerBox}>
                <SubHeader
                    subHeading="Hi, I'm Mirela Cacan"
                    className={style.h2}
                />
                {/*Headers imported for easer acces to styling of similar headers on the page*/}
                <div className={style.introPicTextBox}>
                    <img className={style.imgMe} src="/images/me.jpg" alt="Me" />
                    <p className={style.introText}> text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
                    {/*picture, header and introduction text displayed*/}
                </div>
            </div>
        </div >
    )
}