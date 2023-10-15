const Button = ({
    href,
    children,
    ariaLabel,
    className = "",
}) => {
    return (
        <a
            href={href}
            aria-label={ariaLabel}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-full hover:cursor-pointer ${className}`}>
            {children}
        </a>
    );
}

export default Button;