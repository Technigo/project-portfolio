//import {useState, useEffect} from "react"
import style from './subheader.module.css';

export const SubHeader = ({ subHeading, className, children }) => {
    console.log(className)
    return (
        <div>
            <h2 className={`${style.SectionH2} ${className}`}>{subHeading}</h2>
            {children}
        </div>
    )
}

