import style from './Hero.module.css';
import { SectionHeader } from '../../UI/SectionHeader/SectionHeader.jsx';
import { SmallerHeader } from '../../UI/SmallerHeader/SmallerHeader.jsx';
import { Photos } from '../../UI/Photos/Photos.jsx';

export const Hero = () => {
    //console.log(style.heroHeader);
    return (
        <div className={style.outer_containerWrapper}>
            <div className={style.wrapper_header}>
                <SmallerHeader
                    smallHeading="Hi, I'm Elba Cacan"
                    className={style.herosmallHeader}
                />
                <SectionHeader
                    heading="Frontend Developer"
                    className={style.heroHeader}
                />
                <Photos selectedMode="me" className={style.imgMe} />
                <p className={style.text}>Test Test Test Test Test Test Test Tesjhjklt Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Tejhgfhjkst Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test </p>
                <Photos selectedMode="arrow" className={style.imgArrow} />
            </div>
        </div>
    )
}

