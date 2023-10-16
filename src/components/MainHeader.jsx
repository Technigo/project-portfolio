import "./mainheader.css";

export const mainheader = ({ className, text }) => {
    return <h2 className={`${className}`}>{text}</h2>;
};