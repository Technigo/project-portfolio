import "./Image.css";

export const Image = ({ className, link, altText }) => {
  return <img className={className} src={link} alt={altText} />;
};
