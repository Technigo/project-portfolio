
export const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag) => {
        tag.toUpperCase();
      })}
    </div>
  )
}
