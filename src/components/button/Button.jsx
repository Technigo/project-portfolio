const Button = ({
    href,
    children,
    className = "",
}) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2s rounded-full hover:cursor-pointer ${className}`}>
            {children}
        </a>
    );
}

export default Button;