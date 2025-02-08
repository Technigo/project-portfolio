import ReactFastMarquee from "react-fast-marquee";
// https://www.react-fast-marquee.com/documentation i used the react fast marquee library to create a marquee effect
export const Marquee = () => {
    return (
        <ReactFastMarquee className="marquee" autoFill>
            <div className="marqueeText">Sherry Isola · Fullstack Developer ·</div>
        </ReactFastMarquee>
    );
};