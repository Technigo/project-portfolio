import { SubHeading } from "../../ReusableComponents/Typography/SubHeading"

// Component for the footerBanner. I decided to not use an image for this part, and instead animate the movement of text using css. 
export const FooterNameBanner = () => {
    return (
        // Aria-hidden so that the bannertext isn't read up when using a screen reader   
        <div aria-hidden="true" className="footer-name-banner">
            <SubHeading text={"Laura Lyckholm · Frontend Developer · Laura Lyckholm · Frontend Developer · Laura Lyckholm · Frontend Developer · Laura Lyckholm · Frontend Developer · Laura Lyckholm · Frontend Developer · Laura Lyckholm · Frontend Developer · Laura Lyckholm · Frontend Developer · Laura Lyckholm · Frontend Developer · Laura Lyckholm · Frontend Developer · Laura Lyckholm · Frontend Developer · Laura Lyckholm · Frontend Developer · Laura Lyckholm · Frontend Developer"} />
        </div>
    )
}
