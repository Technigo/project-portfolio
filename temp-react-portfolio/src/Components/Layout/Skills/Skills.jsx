import style from './Skills.module.css';
import { SectionHeader } from '../../UI/SectionHeader/SectionHeader.jsx';
import { SmallerHeader } from '../../UI/SmallerHeader/SmallerHeader.jsx';

export const Skills = () => {
    const smallHeaders = [
        { type: 'small', heading: "Code", className: style.smallerHeadingCode },
        { type: 'small', heading: "Toolbox", className: style.smallerHeadingToolbox },
        { type: 'small', heading: "Upcoming", className: style.smallerHeadingUpcoming },
        { type: 'small', heading: "More", className: style.smallerHeadingMore },
    ]; //This array will be mapped over to dynamically render each SmallerHeader with the provided props

    return (
        <div className={style.outer_containerWrapperSkills}>
            <div className={style.wrapper_skills}>
                <SectionHeader
                    heading="Skills"
                    className={style.skillsHeader}
                />
                {smallHeaders.map((header, index) => (
                    <SmallerHeader
                        key={index}
                        smallHeading={header.heading}
                        className={`${style.smallerHeadingSkills} ${header.className}`}
                    /> //ClassName: Makes it possible to style headers as a section and each inividually. 
                ))}
                <li className={style.textBoxCode}>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                </li>
                <li className={style.textBoxToolbox}> <p>test</p>
                    <p>test</p>
                    <p>test</p>
                </li>
                <li className={style.textBoxUpcoming}>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                </li>
                <li className={style.textBoxMore}> <p>test</p>
                    <p>test</p>
                    <p>test</p>
                </li>
            </div>
        </div>
    )
}