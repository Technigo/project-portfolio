import style from './Tech.module.css';
import { SectionHeader } from '../../UI/SectionHeader/SectionHeader.jsx';
import { SmallerHeader } from '../../UI/SmallerHeader/SmallerHeader.jsx';

export const Tech = () => {
    return (
        <div className={style.outer_containerWrapperTech}>
            <div className={style.wrapper_tech}>
                <SectionHeader
                    heading="Tech"
                    className={style.techHeader}
                />
                <SmallerHeader
                    smallHeading="The text is just a Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test TestTest Test Test Test Test Test Test Test Test Test Test Test Test Test Test TestTest Test Test Test Test Test Test Test Test Test Test  "
                    className={style.smallerHeadingTech}
                />
            </div>
        </div>
    )
}
