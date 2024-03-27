export const Button = ({ url, className, icon, text }) => {
  return (
    <div className="button-container">
      <a
        href={url}
        className={className}
        target="_blank"
        rel="noopener noreferrer">
        {icon}
        {text}
      </a>
    </div>
  )
}
