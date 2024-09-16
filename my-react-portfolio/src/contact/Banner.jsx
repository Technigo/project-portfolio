import "./Banner.css";
import { GoDotFill } from "react-icons/go";

export const Banner = () => {
  return (
    <div className="banner-wrapper">
      <span className="banneritem">
        Linda Frischknecht <span className="banner-span"></span>
        <GoDotFill className="dot" /> <span className="banner-span"></span>
        Web Developer <span className="banner-span"></span>
        <GoDotFill className="dot" /> <span className="banner-span"></span>
      </span>
      <span className="banneritem">
        Linda Frischknecht <span className="banner-span"></span>
        <GoDotFill className="dot" /> <span className="banner-span"></span>
        Web Developer <span className="banner-span"></span>
        <GoDotFill className="dot" /> <span className="banner-span"></span>
      </span>
      <span className="banneritem">
        Linda Frischknecht <span className="banner-span"></span>
        <GoDotFill className="dot" /> <span className="banner-span"></span>
        Web Developer <span className="banner-span"></span>
        <GoDotFill className="dot" /> <span className="banner-span"></span>
      </span>
    </div>
  );
};
