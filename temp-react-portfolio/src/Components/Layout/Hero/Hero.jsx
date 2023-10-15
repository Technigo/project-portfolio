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
                <p className={style.text}>"Mea itineris in mundum technologiae ex inusitata origine coepit. Cum fundamento
                    firmiter in pedagogia, munus duxendi gregem tenebam et consuetudinem habebam onera graves gerendi.
                    <br /><br />
                    Nunc me insero in, programma intensivum viginti duo septimanarum, quod confirmavit propositum meum adversus difficultates directe aggrediendi et semper novas facultates adipiscendi. Exspecto ut meam peritiam novo adquisitam in campo web developmentus applicem."
                </p>
                <Photos selectedMode="arrow" className={style.imgArrow} />
            </div>
        </div>
    )
}

