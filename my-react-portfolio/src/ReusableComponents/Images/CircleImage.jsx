import "./image.css";

export const CircleImage = ({ className, src, altImagetext }) => {
    return (
        <img className={`CircleImage ${className}`} src={src} alt={altImagetext} />
    );
};