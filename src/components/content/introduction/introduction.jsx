import style from './introduction.module.css';
import { SubHeader } from '../../reusable/subheader/subheader.jsx';
import { MainHeader } from '../../reusable/mainheader/mainheader.jsx';

export const Introduction = ({ arrow }) => {
    //Did not have time to make the arrow work, but let the start code stay here for later//
    function handleClick() {
        arrow.current.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <div className={style.introBox}>
            <div className={style.innerBox}>
                <SubHeader
                    subHeading="Hi, I'm Mirela Cacan"
                    className={style.h2}
                />
                <MainHeader
                    mainHeading="Frontend Development"
                    className={style.h1}
                />
                <div className={style.introPicTextBox}>
                    <img className={style.imgMe} src="/images/me.jpg" alt="Me" />
                    <p className={style.introText}> text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
                </div>
                <button className={style.arrow} onClick={() => handleClick(arrow)}>
                    <img src="../public/images/Arrow.svg" alt="next section" />
                </button>
            </div>
        </div>
    )
}
