import "./LinkButton.css";

export const LinkButton = ({ url, className, title, icon, text }) => {
  return (
    <div className="link-btn">
      <a
        href={url}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
      >
        {icon}
        {text}
      </a>
    </div>
  );
};
