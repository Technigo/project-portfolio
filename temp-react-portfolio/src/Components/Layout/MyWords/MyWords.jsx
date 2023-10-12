import style from './MyWords.module.css';
import { SectionHeader } from '../../UI/SectionHeader/SectionHeader.jsx';

export const MyWords = () => {
    return (
        <div className={style.wrapper_myWords}>
            <SectionHeader
                heading="My Words"
                className={style.mywordsHeader}
            />
        </div>
    )
}
