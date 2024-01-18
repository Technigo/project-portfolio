import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-text">
        {Array(100).fill("Isaac Kamran · Frontend Developer · ").join(' ')}
      </div>
    </footer>
  );
};
