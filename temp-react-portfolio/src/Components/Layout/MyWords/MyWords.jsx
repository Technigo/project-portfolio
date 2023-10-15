import style from './MyWords.module.css';
import { SectionHeader } from '../../UI/SectionHeader/SectionHeader.jsx';
import { Photos } from '../../UI/Photos/Photos.jsx';

export const MyWords = () => {



    return (
        <div className={style.outer_WordsWrapper}>
            <Photos selectedMode="waveLine" className={style.waveLine} />
            <div className={style.wrapper_myWords}>
                <SectionHeader
                    heading="My Words"
                    className={style.mywordsHeader}
                />
            </div>
        </div>
    )
}
