const Photo = ({
    src,
    alt,
    color,
    className,
}) => {
    return (
        <div className={`relative ${className}`}>
            <div
                className={`absolute w-full h-full border-l-photo border-b-photo ${color}`}
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