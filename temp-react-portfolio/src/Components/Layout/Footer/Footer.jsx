import style from './Footer.module.css';
import { SectionHeader } from '../../UI/SectionHeader/SectionHeader.jsx';

export const Footer = () => {
    const text = "Elba Cacan · Frontend Developer · ";
    return (
        <div className={style.wrapper_footer}>
            <div className={style.ticker}>
                <SectionHeader
                    heading={text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text + text}
                    className={style.footerHeader}
                />
            </div>
        </div>
    )
}
//Decided on many copies to achive the effect i want wthout worring that it wil be cut off if screen is bigger.