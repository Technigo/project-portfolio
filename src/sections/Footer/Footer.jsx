import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-text">
        {Array(100).fill("Carolina Luna · Frontend Developer · ").join(" ")}
      </div>
    </footer>
  );
};
