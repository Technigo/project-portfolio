import ReactFastMarquee from "react-fast-marquee";

export const Marquee = () => {
  return (
    <ReactFastMarquee className="marquee" autoFill>
      <div className="marqueeText">Sara Svensson · Fullstack Developer ·</div>
    </ReactFastMarquee>
  );
};
