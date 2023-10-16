import "./subheader.css";

export const subheader = ({ className, text }) => {
    return <h3 className={`${className}`}>{text}</h3>;
};