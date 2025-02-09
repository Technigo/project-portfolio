import ReactFastMarquee from "react-fast-marquee";
// used the react fast marquee library to create  marquee effect
export const Marquee = () => {
    return (
        <ReactFastMarquee className="marquee" autoFill>
            <div className="marqueeText">Sherry Isola · Fullstack Developer ·</div>
        </ReactFastMarquee>
    );
};