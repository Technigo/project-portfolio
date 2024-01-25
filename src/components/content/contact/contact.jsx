//NOT DONE:
// Find better picture
// Button Hover

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
                        <p>Mirela Cacan</p>
                        <p>+47 410 45 384</p>
                        <p>mirelacacan@gmail.com</p>
                    </div>
                    <div className={style.socialMedia}>
                        <a href="https://github.com/mirelcac" target="_blank" rel="noopener noreferrer">
                            <img src="./images/github.svg" alt="Github" />
                        </a>
                        <a href="https://linkedin.com/in/mirela-cacan-724aba71" target="_blank" rel="noopener noreferrer">
                            <img src="./images/linkedin.svg" alt="LinkedIn" />
                        </a>
                        <a href="https://stackoverflow.com/users/23298387/mirelc" target="_blank" rel="noopener noreferrer">
                            <img src="./images/stackoverflow.svg" alt="StackOverflow" />
                        </a>
                        <a href="https://instagram.com/mirelacacan" target="_blank" rel="noopener noreferrer">
                            <img src="./images/instagram.svg" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
