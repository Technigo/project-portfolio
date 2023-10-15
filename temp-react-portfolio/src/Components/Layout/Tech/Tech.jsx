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
                    smallHeading="HTML, CSS, Flexbox, JavaScript, ES6, 
                    JSX, React, React Hooks, Web Accessibility, APIs, 
                    mob-programming, pair-programming, GitHub.   "
                    className={style.smallerHeadingTech}
                />
            </div>
        </div>
    )
}
