const Photo = ({
    src,
    alt,
    color,
    className,
}) => {
    const border = `20px solid ${color}`;
    return (
        <div className={`relative ${className}`}>
            <div
                style={{ borderLeft: border, borderBottom: border }}
                className="absolute w-full h-full"
            />
            <img
                src={src}
                alt={alt}
                className="w-full object-cover"
            />
        </div>
    );
}

export default Photo;