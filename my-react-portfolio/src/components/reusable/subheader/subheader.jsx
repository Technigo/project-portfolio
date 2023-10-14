//import {useState, useEffect} from "react"
import style from './subheader.module.css';

export const SubHeader = ({ subHeading, className }) => {
    console.log(className)
    return (
        <h2 className={`${style.SectionH2} ${className}`}>{subHeading}</h2>
    )
}