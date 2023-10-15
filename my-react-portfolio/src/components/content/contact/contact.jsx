//import {useState, useEffect} from "react"
import style from './contact.module.css'
import { MainHeader } from "../../reusable/mainheader/mainheader"

export const Contact = () => {

    return (
        <div className={style.contactBox}>
            <MainHeader
                className={style.h1}
                mainHeading="Let's talk"
            />
            <div className={style.innerBox}>
                <img className={style.imgMe} src="/images/me.jpg" alt="Me" />
                <div className={style.contactInfoBox}>
                    <div className={style.contactInfo}>
                        <p>Name</p>
                        <p>Phone</p>
                        <p>mirelacacan@gmail.com</p>
                    </div>
                    <div className={style.socialMedia}>
                        <img src="./public/images/github.svg" alt="Github" />
                        <img src="./public/images/linkedin.svg" alt="LinkedIn" />
                        <img src="./public/images/stackoverflow.svg" alt="StackOverflow" />
                        <img src="./public/images/instagram.svg" alt="Instagram" />
                    </div>
                </div>
            </div>
        </div>
    )
}
