// NOT DONE:
// Find better picture
// Make the arrow work

import style from './introduction.module.css';
import { SubHeader } from '../../reusable/subheader/subheader.jsx';
import { MainHeader } from '../../reusable/mainheader/mainheader.jsx';
export const Introduction = ({ arrow }) => {
    //Did not have time to make the arrow work, but let the start code stay here for later//
    /* function handleClick() {
         arrow.current.scrollIntoView({
             behavior: "smooth"
         })
     }*/

    return (
        <div className={style.introBox}>
            <div className={style.imgWrapper}>
                <img className={style.imgMe} src="/images/me.jpg" alt="Me" />
            </div>
            <SubHeader
                subHeading="Hi, I'm Mirela Cacan"
                className={style.h2}
            />
            <MainHeader
                mainHeading="Frontend Developer"
                className={style.h1}
            />
            <p className={style.introText}> Mirela has been working with product user compatability and testing for a while, and has lately deepened her knowledge to include web development. She is a fast learner and is quick to understand how things are related and how to solve problems. </p>
            <button className={style.arrow} onClick={() => handleClick(arrow)}>
                <img src="./images/Arrow.svg" alt="next section" />
            </button>
        </div>
    )
}