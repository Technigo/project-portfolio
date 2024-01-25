//Go through skills and add/ delete once more

import style from './skills.module.css'
import { SubHeader } from '../../reusable/subheader/subheader.jsx'
import { MainHeader } from '../../reusable/mainheader/mainheader.jsx'

export const Skills = () => {
    const code = [
        "HTML 5", "CSS", "Javascript ES6", "React",
        "Styled Components", "GitHub", "Mongo DB Atlas",
        "Mongoose", "Authentication"
    ];

    const toolbox = [
        "Terminal", "Postman", "Mongo DB", "Compass", "Express", "Figma", "Slack", "Adobe PRO", "Netlify", "Render"];

    const upcoming = [
        "PRINCE2 Forundation", "PRINCE2 Foundation Agile"
    ];

    const more = [
        "Product Description", "User Compatibility",
        "Scrum", "Test Lead", "Strategy", "Agile Methodology"
    ];

    return (
        <div>
            <div className={style.skillBox}>
                <MainHeader mainHeading="Skills" className={style.h1} />
                <div className={style.innerBox}>
                    <div className={style.skillList}>
                        <SubHeader className={style.headerCode} subHeading="Code">
                            <ul className={style.commonP}>
                                {code.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </SubHeader>
                    </div>
                    <div className={style.skillList}>
                        <SubHeader className={style.headerToolbox} subHeading="Toolbox">
                            <ul className={style.commonP}>
                                {toolbox.map((tool, index) => (
                                    <li key={index}>{tool}</li>
                                ))}
                            </ul>
                        </SubHeader>
                    </div>
                    <div className={style.skillList}>
                        <SubHeader className={style.headerUpcoming} subHeading="Upcoming">
                            <ul className={style.commonP}>
                                {upcoming.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </SubHeader>
                    </div>
                    <div className={style.skillList}>
                        <SubHeader className={style.headerMore} subHeading="More">
                            <ul className={style.commonP}>
                                {more.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </SubHeader>
                    </div>
                </div>
            </div>
        </div>
    );
};