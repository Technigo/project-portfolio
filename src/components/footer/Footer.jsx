import "./Footer.css";

export const Footer = () => {
  return (
    <div className="scrolling-text-container">
      <div className="scrolling-text-inner" role="marquee">
        <div className="scrolling-text">
          <div className="scrolling-text-item">
            &nbsp;Jonas Hellström • Web Developer • Jonas Hellström •
            Web Developer • Jonas Hellström • Web Developer • Jonas
            Hellström • Web Developer •&nbsp;
          </div>
          <div className="scrolling-text-item item2">
            &nbsp;Jonas Hellström • Web Developer • Jonas Hellström •
            Web Developer • Jonas Hellström • Web Developer • Jonas Hellström • Web Developer •&nbsp;
          </div>
        </div>
      </div>
    </div>
  );
};