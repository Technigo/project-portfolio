import { Headline } from "../components/Headline";
import { MediumHeadline } from "../components/MediumHeadline";



export const TechSkills = () => {
    let headerText = "Tech";
    let mediumSizeHeader = `HTML, CSS, Flexbox, JavaScript, ES6, 
    JSX, React, React Hooks, Node.js, APIs, 
    Web Accessibility, mob-programming, pair-programming, GitHub. `


    return (
        <>
            <div className="techSkills-page-wrapper">
                <Headline headerText={headerText} />
                <MediumHeadline mediumSizeHeader={mediumSizeHeader} />
                </div>
        </>
    )
}
