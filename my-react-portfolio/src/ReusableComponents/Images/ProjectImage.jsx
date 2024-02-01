import "./image.css";

export const ProjectImage = ({ className, src, altImagetext }) => {
    return (
        <img className={className} src={src} alt={altImagetext} />
    );
};