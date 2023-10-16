//import {useState, useEffect} from "react"
import style from './mainheader.module.css';

export const MainHeader = ({ mainHeading, className }) => {
    console.log(className)
    return (
        <h1 className={`${style.SectionH1} ${className}`}>{mainHeading}</h1>
    )
}