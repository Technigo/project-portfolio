export const Photo = ({path , altText, className}) => {
  return (
    <img src={path} alt={ altText} className={className} />
  )
}