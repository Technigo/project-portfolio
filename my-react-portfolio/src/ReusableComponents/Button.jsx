
export const Button = ({ label, path, className }) => {
  const handleClick = () => {
    // Perform redirection upon button click
    window.location.href = path; // Use the path provided as a property
  };

  return (
    <button className={className} onClick={handleClick}>
      {label}
    </button>
  );
};