import './Button.css';

export const Button = ({ link, text }) => {
  return (
    <a href={link} className="button" target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
};