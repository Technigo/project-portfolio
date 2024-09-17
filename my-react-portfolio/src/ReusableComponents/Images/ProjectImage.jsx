export const ProjectImage = ({ className, src, altImagetext }) => {
  return (
    <img className={`ProjectImage ${className}`} src={src} alt={altImagetext} />
  );
};
