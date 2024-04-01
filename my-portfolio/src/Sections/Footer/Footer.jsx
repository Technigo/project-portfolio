import "./Footer.css";
export const Footer = () => {
  return (
    <div className="marquee enable-animation marquee--fit-content">
      <ul className="marquee__content">
        <li>Martin Jönsson</li>
        <li>•</li>
        <li>Frontend Developer</li>
        <li>•</li>
      </ul>
      <ul aria-hidden="true" className="marquee__content">
        <li>Martin Jönsson</li>
        <li>•</li>
        <li>Frontend Developer</li>
        <li>•</li>
      </ul>
    </div>
  );
};
