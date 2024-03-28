import "./Banner.css";
import { GoDotFill } from "react-icons/go";

export const Banner = () => {
  return (
    <div className="banner-wrapper">
      <marquee className="banner">
        <div className="banneritem">
          <p>
            Linda Frischknecht <span className="banner-span"></span>
            <GoDotFill className="dot" /> <span className="banner-span"></span>
            Web Developer <span className="banner-span"></span>
            <GoDotFill className="dot" /> <span className="banner-span"></span>
            Linda Frischknecht <span className="banner-span"></span>
            <GoDotFill className="dot" /> <span className="banner-span"></span>
            Web Developer <span className="banner-span"></span>
            <GoDotFill className="dot" /> <span className="banner-span"></span>
            Linda Frischknecht <span className="banner-span"></span>
            <GoDotFill className="dot" /> <span className="banner-span"></span>
            Web Developer <span className="banner-span"></span>
            <GoDotFill className="dot" /> <span className="banner-span"></span>
          </p>
        </div>
      </marquee>
    </div>
  );
};
